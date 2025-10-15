import React, { useEffect, useRef } from "react";
import video from './../../public/videos/hero.mp4'
import title from './../../public/title.png'
const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section id="hero" className="text-center space-y-4">
      <div>
        <h1>MacBook Pro</h1>
        <img src={title} alt="MacBook Title" />
      </div>

      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />

      <button>Buy</button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
