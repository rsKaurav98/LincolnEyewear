import React, { useState, useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Text,
  Spinner,
  Image,
  useToast,
} from '@chakra-ui/react';
import Webcam from 'react-webcam';

const FaceCaptureModal = ({ isOpen, onClose, onSave }) => {
  const webcamRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  const toast = useToast();

  const loadModels = async () => {
    try {
      await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
      await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
      await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading models:', error);
      toast({
        title: 'Error loading models.',
        description: 'Please check your internet connection and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        webcamRef.current.srcObject = stream;
      })
      .catch((err) => console.error('Error accessing webcam:', err));
  };

  const stopVideo = () => {
    if (webcamRef.current && webcamRef.current.srcObject) {
      const stream = webcamRef.current.srcObject;
      stream.getTracks().forEach((track) => track.stop());
      webcamRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadModels();
      startVideo();
    }
    return () => {
      stopVideo();
    };
  }, [isOpen]);

  const takePhoto = async () => {
    if (!webcamRef.current) return;

    try {
      setIsProcessing(true);
      const imageSrc = webcamRef.current.getScreenshot();
      setImageData(imageSrc);

      const img = new Image();
      img.src = imageSrc;
      img.onload = async () => {
        const detections = await faceapi.detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();

        if (detections) {
          setIsPhotoTaken(true);
        } else {
          toast({
            title: 'Face not detected properly.',
            description: 'Please ensure your face is fully visible and centered within the frame.',
            status: 'warning',
            duration: 4000,
            isClosable: true,
          });
          startVideo();
        }
      };
    } catch (error) {
      console.error('Error taking photo:', error);
      toast({
        title: 'An error occurred.',
        description: 'Unable to capture the photo. Please try again.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      startVideo();
    } finally {
      setIsProcessing(false);
    }
  };

  const savePhoto = () => {
    localStorage.setItem('userPhoto', imageData);
    onSave(imageData);
    closeAndStopVideo();
  };

  const closeAndStopVideo = () => {
    stopVideo();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeAndStopVideo} isCentered size="3xl">
      <ModalOverlay />
      <ModalContent borderRadius="lg" overflow="hidden" bgColor="gray.900" color="white">
        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
          Capture Your Face
        </ModalHeader>
        <ModalBody>
          {isLoading ? (
            <Box textAlign="center">
              <Spinner size="xl" color="white" />
              <Text mt={4}>📸 Click 'Allow' to access your camera.</Text>
              <Text>💡 Ensure your face is well-lit and centered.</Text>
              <Text mt={4}>Loading camera...</Text>
            </Box>
          ) : isProcessing ? (
            <Box textAlign="center">
              {imageData && (
                <Image src={imageData} borderRadius="md" boxShadow="lg" />
              )}
              <Spinner size="xl" color="white" mt={4} />
              <Text mt={4}>Processing photo...</Text>
            </Box>
          ) : isPhotoTaken ? (
            <Box textAlign="center">
              <Image src={imageData} borderRadius="md" boxShadow="lg" />
              <Text mt={4}>Do you want to use this photo?</Text>
            </Box>
          ) : (
            <Box position="relative" display="flex" justifyContent="center" alignItems="center">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{ width: 1280, height: 720, facingMode: "user" }}
                style={{
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
                }}
              />
            </Box>
          )}
        </ModalBody>
        <ModalFooter justifyContent="center">
          {!isPhotoTaken ? (
            <Button
              onClick={takePhoto}
              colorScheme="teal"
              boxShadow="lg"
              borderRadius="md"
              px={6}
              isLoading={isProcessing}
              loadingText="Taking Photo"
              disabled={isProcessing}
            >
              Take Photo
            </Button>
          ) : (
            <>
              <Button
                onClick={savePhoto}
                colorScheme="teal"
                boxShadow="lg"
                borderRadius="md"
                px={6}
              >
                Use Photo
              </Button>
              <Button
                onClick={() => (setIsPhotoTaken(false), startVideo())}
                ml={3}
                borderRadius="md"
                bgColor="gray.700"
                color="white"
                _hover={{ bgColor: "gray.600" }}
              >
                Retake Photo
              </Button>
            </>
          )}
          <Button
            onClick={closeAndStopVideo}
            ml={3}
            borderRadius="md"
            bgColor="gray.700"
            color="white"
            _hover={{ bgColor: "gray.600" }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FaceCaptureModal;
