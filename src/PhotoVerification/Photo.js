import React, { useRef } from 'react';
import { Button } from '@mui/material';

const Camera = () => {
  const videoRef = useRef();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error('Error accessing the camera:', err);
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photoData = canvas.toDataURL('image/png');
    console.log('Captured Photo Data:', photoData);

    // You can now send `photoData` to your server or do any further processing
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={startCamera}>
        Start Camera
      </Button>
      <Button variant="contained" color="primary" onClick={takePhoto}>
        Take Photo
      </Button>
      <video ref={videoRef} autoPlay muted style={{ display: 'block' }} />
    </div>
  );
};

export default Camera;
