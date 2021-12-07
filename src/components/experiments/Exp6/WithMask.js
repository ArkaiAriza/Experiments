import React, { useState, useEffect } from 'react';
import Parallax from './Parallax';
import { brushPoints, maskImage } from './resources';

const Exp6 = () => {
  const brushPosition = -710 + 250 * Math.floor(window.scrollY / 310);
  const gradientSize = 100 + 250 * Math.floor((window.scrollY - 510) / 310);

  return (
    <div
      style={{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'red',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: `0px 0px, 0px ${brushPosition}px`,
        WebkitMaskSize: `100% ${gradientSize >= 0 ? gradientSize : 0}px, 100%`,
        WebkitMaskImage: `linear-gradient(black 0%, black 100%), url(${maskImage})`,
      }}
    >
      <Parallax
        reverse
        url={
          'https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/bltc4bc85cdd060c39f/6137eea8f825e542a1554b1d/Homepage_Story_Zaun.jpg'
        }
      />
    </div>
  );
};

export default Exp6;
