"use client"
import React, { useEffect, useRef, useState } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video:any = videoRef.current;
    
    const handleError = (e:any) => {
      console.error('Video Error:', e);
      //setError('Error loading video');
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      // Explicitly call play() after video can play
      video!.play().catch((err:any) => {
        console.error('Autoplay failed:', err);
       // setError('Autoplay blocked by browser');
      });
    };

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <div className="relative w-48 max-w-48 mx-auto">
   
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      <video 
        ref={videoRef}
        className="w-48 h-full rounded-lg"
        autoPlay 
        muted 
        playsInline
        controls // Added controls for debugging
      >
        <source src="/indoor-farming.mp4" type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  );
};

export default VideoPlayer;