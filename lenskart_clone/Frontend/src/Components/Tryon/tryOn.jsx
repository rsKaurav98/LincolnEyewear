import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import Webcam from 'react-webcam';
import * as THREE from 'three';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-converter';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-wasm';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import { Box, Center, Button, useMediaQuery, Spinner, Text, IconButton, Alert, AlertIcon } from '@chakra-ui/react';
import { CloseIcon, AddIcon, MinusIcon } from '@chakra-ui/icons';

const VirtualTryOn = forwardRef((props, ref) => {
  const { isOpen, imageSrc, onClose } = props;
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [glassesMesh, setGlassesMesh] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFaceModelLoading, setIsFaceModelLoading] = useState(true);
  const [glassesScale, setGlassesScale] = useState(1);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [error, setError] = useState(null);

  useImperativeHandle(ref, () => ({
    stopWebcam
  }));

  const loadModelWithFallback = async () => {
    let backendLoaded = false;
  
    try {
      await tf.setBackend('wasm');
      await tf.ready();
      backendLoaded = true;
      console.log('Using TensorFlow.js backend: wasm');
    } catch (error) {
      console.warn('WASM failed to load, falling back to WebGL');
      try {
        await tf.setBackend('webgl');
        await tf.ready();
        backendLoaded = true;
        console.log('Using TensorFlow.js backend: webgl');
      } catch (error) {
        console.error('WebGL failed, falling back to CPU');
        await tf.setBackend('cpu');
        await tf.ready();
      }
    }
  
    if (!backendLoaded) throw new Error('No supported backend found for TensorFlow.js');
  
    const loadedModel = await faceLandmarksDetection.load(
      faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
      { shouldLoadIrisModel: true, maxFaces: 1 }
    );
  
    return loadedModel;
  };
  

  const loadResources = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
      }

      const loadedModel = await loadModelWithFallback();
      setModel(loadedModel);

      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
      renderer.setSize(width, height);
      renderer.setAnimationLoop(() => renderer.render(scene, camera));

      const proxyUrls = [
        'https://api.allorigins.win/raw?url=',
        'https://cors-anywhere.herokuapp.com/',
        'https://thingproxy.freeboard.io/fetch/',
      ];

      const textureLoader = new THREE.TextureLoader();
      const loadTextureWithFallback = (index = 0, retries = 3) => {
        if (index >= proxyUrls.length) {
          setError('Failed to load glasses texture. Please try again.');
          return;
        }

        const currentProxyUrl = proxyUrls[index];
        textureLoader.load(
          currentProxyUrl + imageSrc,
          (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            const geometry = new THREE.PlaneGeometry(2, 1);
            const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
            const glasses = new THREE.Mesh(geometry, material);
            scene.add(glasses);
            setGlassesMesh(glasses);
          },
          undefined,
          (error) => {
            if (retries > 0) {
              console.error(`Texture load error with proxy ${currentProxyUrl}: ${error}. Retrying... (${retries})`);
              loadTextureWithFallback(index, retries - 1);
            } else {
              console.error(`Failed to load texture with proxy ${currentProxyUrl}. Trying next proxy...`);
              loadTextureWithFallback(index + 1); 
            }
          }
        );
      };

      loadTextureWithFallback();
    } catch (error) {
      console.error("Initialization error:", error);
      setError('Failed to initialize the virtual try-on. Please reload the page.');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadResources();
    } else {
      stopWebcam();
    }
    return () => stopWebcam();
  }, [isOpen, imageSrc]);

  useEffect(() => {
    const detectAndPositionGlasses = async () => {
      if (!webcamRef.current || !model || !glassesMesh) return;
  
      const video = webcamRef.current.video;
      if (video.readyState !== 4) return;
      
      try {
        const faceEstimates = await model.estimateFaces({ input: video });
        if (faceEstimates.length > 0) {
          const keypoints = faceEstimates[0].scaledMesh;
          const leftEye = keypoints[130];
          const rightEye = keypoints[359];
          const eyeCenter = keypoints[168];
  
          const eyeDistance = Math.sqrt(
            Math.pow(rightEye[0] - leftEye[0], 2) + Math.pow(rightEye[1] - leftEye[1], 2)
          );
          const scaleMultiplier = eyeDistance / 90;
  
          const scaleX = -0.01;
          const scaleY = -0.01;
          const offsetX = 0.00;
          const offsetY = -0.06;
  
          // Set glasses position and scale
          glassesMesh.position.x = (eyeCenter[0] - video.videoWidth / 2) * scaleX + offsetX;
          glassesMesh.position.y = (eyeCenter[1] - video.videoHeight / 2) * scaleY + offsetY;
          glassesMesh.scale.set(
            scaleMultiplier * glassesScale,
            scaleMultiplier * glassesScale,
            scaleMultiplier * glassesScale
          );
          glassesMesh.position.z = 1;
  
          const eyeLine = new THREE.Vector2(rightEye[0] - leftEye[0], rightEye[1] - leftEye[1]);
          const rotationZ = Math.atan2(eyeLine.y, eyeLine.x);
          glassesMesh.rotation.z = rotationZ;
          setIsLoading(false);
          setIsFaceModelLoading(false);

        }
      } catch (error) {
        console.error("Face detection error:", error);
        setError('Failed to detect face. Please ensure your face is fully visible and retry.');
      }
    };
  
    const renderLoop = () => {
      detectAndPositionGlasses();
      requestAnimationFrame(renderLoop);
    };
  
    if (model && glassesMesh) {
      renderLoop();
    }
  
    return () => {
      if (glassesMesh) {
        cancelAnimationFrame(renderLoop);
      }
    };
  }, [model, glassesMesh, glassesScale]);
  

  const stopWebcam = () => {
    if (webcamRef.current && webcamRef.current.srcObject) {
      const stream = webcamRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      webcamRef.current.srcObject = null;
    }
  };

  const handleSizeChange = (delta) => {
    setGlassesScale(prevScale => Math.max(0.5, prevScale + delta));
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '90vh',
        background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        overflow: 'hidden',
        borderRadius: '20px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        flexDirection: "column",
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ position: 'relative', margin: '0 auto', width: isMobile?'340px':'800px', height: isMobile?'340px':'800px' }}>
        {isLoading && !error && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 2,
            }}
          >
            <Spinner size="xl" color="blue.500" />
            <Text mt={4} fontSize="lg" color="#333">Loading...</Text>
            <Box mt={4} textAlign="center" color="#666">
              <Text fontSize="16px">💡 Be in a well-lit area.</Text>
              <Text fontSize="16px">👀 Ensure your face is fully visible and centered.</Text>
              <Text fontSize="16px">🚫 Avoid shadows and glare.</Text>
            </Box>
          </div>
        )}
        <Webcam ref={webcamRef} autoPlay playsInline style={{ width: isMobile?'340px':'800px', height: isMobile?'340px':'800px' }} mirrored={true} />
        <canvas ref={canvasRef} style={{ width: isMobile?'340px':'800px', height: isMobile?'340px':'800px', position: 'absolute', top: 0, left: 0 }} />
      </div>
      <Button
        onClick={() => {
          onClose();
          stopWebcam();
        }}
        position="absolute"
        top="20px"
        right="15px"
        variant="ghost"
        zIndex={3}
        style={{
          backgroundColor: '#d32f2f',
          color: '#fff',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)', 
        }}
        cursor="pointer"
      >
        <CloseIcon boxSize={5} color="#fff" />
      </Button>

      {!isLoading && !isFaceModelLoading && (
        <Box
          position="absolute"
          bottom="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="10px"
          zIndex={3}
          backgroundColor="rgba(0, 0, 0, 0.75)" 
          padding="10px 15px"
          borderRadius="15px"
          boxShadow="0 6px 12px rgba(0, 0, 0, 0.2)" 
        >
          <IconButton
            onClick={() => handleSizeChange(-0.03)}
            icon={<MinusIcon />}
            aria-label="Decrease size"
            variant="solid"
            _hover={{ backgroundColor: '#1E88E5' }} 
            style={{
              color: '#fff',
              backgroundColor: '#4A90E2',
              borderRadius: '50%',
              padding: '10px',
            }}
          />
          <IconButton
            onClick={() => handleSizeChange(0.03)}
            icon={<AddIcon />}
            aria-label="Increase size"
            variant="solid"
            _hover={{ backgroundColor: '#1E88E5' }} 
            style={{
              color: '#fff',
              backgroundColor: '#4A90E2',
              borderRadius: '50%',
              padding: '10px',
            }}
          />
        </Box>
      )}
    </div>
  );
});

export default VirtualTryOn;
