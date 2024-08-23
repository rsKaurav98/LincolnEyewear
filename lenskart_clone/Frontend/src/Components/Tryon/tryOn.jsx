import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import Webcam from 'react-webcam';
import * as THREE from 'three';
import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-converter';
import '@tensorflow/tfjs-backend-webgl';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import { Box, Center, Button, useMediaQuery, Spinner, Text, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const VirtualTryOn = forwardRef((props, ref) => {
  const { isOpen, imageSrc, onClose } = props;
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);
  const [glassesMesh, setGlassesMesh] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isFaceModelLoading, setIsFaceModelLoading] = useState(true);

  useImperativeHandle(ref, () => ({
    stopWebcam,
  }));

  // Preload face landmarks model asynchronously
  useEffect(() => {
    const loadModel = async () => {
      try {
        await tf.setBackend('webgl');
        const loadedModel = await faceLandmarksDetection.load(
          faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
          { shouldLoadIrisModel: true, maxFaces: 1 }
        );
        setModel(loadedModel);
      } catch (error) {
        console.error("Error loading face landmarks model:", error);
      }
    };

    loadModel();
  }, []);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (webcamRef.current) {
          webcamRef.current.srcObject = stream;
        }

        const width = canvasRef.current.clientWidth;
        const height = canvasRef.current.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(width, height);
        renderer.setAnimationLoop(() => renderer.render(scene, camera));

        const textureLoader = new THREE.TextureLoader();
        const proxyUrl = 'https://api.allorigins.win/raw?url=';
        textureLoader.load(proxyUrl + imageSrc, (texture) => {
          const geometry = new THREE.PlaneGeometry(3, 1.5);
          const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
          const glasses = new THREE.Mesh(geometry, material);
          scene.add(glasses);
          setGlassesMesh(glasses);
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Initialization error:", error);
        setIsLoading(false);
      }
    };

    if (isOpen) {
      loadResources();
    } else {
      stopWebcam();
    }

    return () => stopWebcam();
  }, [isOpen, imageSrc]);

  // Debounce face detection to improve performance
  useEffect(() => {
    let animationFrameId;
    const detectAndPositionGlasses = async () => {
      if (!webcamRef.current || !model || !glassesMesh) return;
      const video = webcamRef.current.video;
      if (video.readyState !== 4) return;

      const faceEstimates = await model.estimateFaces({ input: video });
      if (faceEstimates.length > 0) {
        setIsFaceModelLoading(false);
        const keypoints = faceEstimates[0].scaledMesh;
        const leftEye = keypoints[130];
        const rightEye = keypoints[359];
        const eyeCenter = keypoints[168];

        const eyeDistance = Math.sqrt(Math.pow(rightEye[0] - leftEye[0], 2) + Math.pow(rightEye[1] - leftEye[1], 2));
        const scaleMultiplier = eyeDistance / 140;

        const scaleX = -0.01;
        const scaleY = -0.01;
        const offsetX = 0.00;
        const offsetY = -0.01;

        glassesMesh.position.x = (eyeCenter[0] - video.videoWidth / 2) * scaleX + offsetX;
        glassesMesh.position.y = (eyeCenter[1] - video.videoHeight / 2) * scaleY + offsetY;
        glassesMesh.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
        glassesMesh.position.z = 1;

        const eyeLine = new THREE.Vector2(rightEye[0] - leftEye[0], rightEye[1] - leftEye[1]);
        const rotationZ = Math.atan2(eyeLine.y, eyeLine.x);
        glassesMesh.rotation.z = rotationZ;
      }

      // Schedule next detection
      animationFrameId = requestAnimationFrame(detectAndPositionGlasses);
    };

    if (model && glassesMesh) {
      detectAndPositionGlasses();
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [model, glassesMesh]);

  const stopWebcam = () => {
    if (webcamRef.current && webcamRef.current.srcObject) {
      const stream = webcamRef.current.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach((track) => track.stop());
      webcamRef.current.srcObject = null;
    }
  };

  return (
    <Center position="relative" width="100%" height="100vh" bg="transparent">
      <Box
        maxWidth={{ base: "95vw", md: "85vw" }}
        maxHeight={{ base: "95vh", md: "85vh" }}
        width="100%"
        height="100%"
        rounded="1rem"
        mt={{ base: isMobile ? "10%" : "2%", md: "2%" }}
        mb={{ base: isMobile ? "10%" : "2%", md: "2%" }}
        boxShadow="2xl"
        bg="primary"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Center position="relative" width="100%" height="100%">
          {isLoading && (
            <Center
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg="white"
              zIndex={2}
              flexDirection="column"
            >
              <IconButton
                icon={<CloseIcon />}
                position="absolute"
                top="20px"
                right="20px"
                variant="ghost"
                onClick={onClose}
                zIndex={3}
              />
              <Box
                as="dotlottie-player"
                src="https://lottie.host/7a2ca4c0-d3bd-4292-b02e-10f9c056aeef/D5ZpetxOX1.json"
                background="primary"
                speed="1"
                style={{ width: "80%", height: "60%" }}
                loop
                autoplay
              />
              <Box mt={4} textAlign="center" color="gray.700" fontSize="lg" fontWeight="medium" lineHeight="1.5">
                <Text>💡 Be in a well-lit area.</Text>
                <Text>👀 Ensure your face is fully visible and centered.</Text>
                <Text>🚫 Avoid shadows and glare.</Text>
                <Text>📸 Click 'Allow' to access your camera.</Text>
              </Box>
            </Center>
          )}

          <Box
            width="90%"
            height="90%"
            padding="2%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            bg="transparent"
          >
            {!isLoading && isFaceModelLoading && (
              <Center position="absolute" zIndex={2}>
                <Spinner size="xl" color="white" />
                <Text fontSize="xl" mt={4} color="white">
                  Creating Face Model...
                </Text>
              </Center>
            )}
            <Webcam ref={webcamRef} autoPlay playsInline style={{ width: '100%', height: '100%' }} mirrored={true} />
            <Box as="canvas" ref={canvasRef} position="absolute" top={0} left={0} width="100%" height="100%" />
          </Box>
        </Center>
        {!isLoading && (
          <Button
            onClick={() => { onClose(); stopWebcam(); }}
            position="absolute"
            top="20px"
            right="20px"
            variant="ghost"
            zIndex={3}
          >
            <CloseIcon />
          </Button>
        )}
      </Box>
    </Center>
  );
});

export default VirtualTryOn;

