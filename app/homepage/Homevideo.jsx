"use client";

import React, { useRef, useState, useEffect } from "react";

export function FullScreenVideoWithOverlay({
  src,
  overlayColor = "#000000",
  overlayOpacity = 0.24,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const isYoutube = src.includes("youtube.com") || src.includes("youtu.be");

  const togglePlay = () => {
    if (!isYoutube) {
      const video = videoRef.current;
      if (video) {
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Detect play / pause changes
  useEffect(() => {
    if (!isYoutube && videoRef.current) {
      videoRef.current.onplay = () => setIsPlaying(true);
      videoRef.current.onpause = () => setIsPlaying(false);
    }
  }, [isYoutube]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={togglePlay} // <-- CLICK ANYWHERE TO TOGGLE PLAY / PAUSE
    >

      {/* YouTube */}
      {isYoutube ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`${src.replace("watch?v=", "embed/")}?autoplay=1&mute=1&controls=0&loop=1&playlist=7s_G5rikLRA`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />

      {/* Show Play Button Only When Paused */}
      {!isPlaying && !isYoutube && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-xl">
            {/* Play Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-black"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <FullScreenVideoWithOverlay
      src="https://www.youtube.com/watch?v=7s_G5rikLRA"
      overlayColor="#000000"
      overlayOpacity={0.24}
    />
  );
}
