import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Parallax from './Parallax';
import { maskImage } from './resources';

const StyledBackgroundMask = styled.div.attrs(
  ({ brushPosition, gradientSize, maskImage }) => ({
    style: {
      WebkitMaskImage: `linear-gradient(black 0%, black 100%), url(${maskImage})`,

      WebkitMaskSize: `100% ${gradientSize >= 0 ? gradientSize : 0}px, 100%`,
      WebkitMaskPosition: `0px 0px, 0px ${brushPosition}px`,
    },
  })
)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: red;
  mask-repeat: no-repeat;
`;

const BackgroundMask = ({ size, options }) => {
  const [brushPosition, setBrushPosition] = useState(0);
  const [gradientSize, setGradientSize] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setBrushPosition(
        -0.24 * size.width - 275 + 250 * Math.floor(window.scrollY / 310)
      );
      setGradientSize(100 + 250 * Math.floor((window.scrollY - 510) / 310));
    };

    window.addEventListener('scroll', onScroll);
  }, [size]);

  useEffect(() => {
    setBrushPosition(
      -0.24 * size.width - 275 + 250 * Math.floor(window.scrollY / 310)
    );
    setGradientSize(100 + 250 * Math.floor((window.scrollY - 510) / 310));
  }, [size]);

  if (!options.value) return null;

  return (
    <StyledBackgroundMask
      brushPosition={brushPosition}
      gradientSize={options.subOptions.gradient ? gradientSize : 0}
      maskImage={options.subOptions.brush ? maskImage : -1000}
    >
      <Parallax
        reverse
        url={
          'https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/bltc4bc85cdd060c39f/6137eea8f825e542a1554b1d/Homepage_Story_Zaun.jpg'
        }
      />
    </StyledBackgroundMask>
  );
};

export default BackgroundMask;
