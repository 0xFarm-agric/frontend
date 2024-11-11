"use client"
import React, { useEffect, useRef} from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);
 

  useEffect(() => {
    const video:any = videoRef.current;
    
    const handleError = (e:Error) => {
      console.error('Video Error:', e);
      //setError('Error loading video');
    };

    const handleCanPlay = () => {
   
      // Explicitly call play() after video can play
      video!.play().catch((err:Error) => {
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