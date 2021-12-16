import React, { useState, useEffect } from 'react';
import Parallax from './Parallax';
import brush from './brush.png';
import { brushPoints, translateBrushCoordinates } from './resources';
import styled from 'styled-components';

const StyledBrushMask = styled.div.attrs(
  ({ brushProps, scrollY, maskSize }) => ({
    style: {
      height: `${brushProps.h}px`,
      width: `${brushProps.w}px`,
      top: `${-400 + 250 * Math.floor(scrollY / 310)}px`,
      WebkitMaskPosition: `${-brushProps.x}px ${-brushProps.y}px`,
      WebkitMaskSize: `${maskSize.width * 2}px ${maskSize.height * 4}px`,
      WebkitMaskImage: `url(${brush})`,
    },
  })
)`
  position: absolute;
  background-color: red;
  mask-repeat: no-repeat;
`;

const BrushMask = ({ size, options }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setFrame(Math.floor(window.scrollY / 10) % 31);
    };

    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyPress = (e) => {
      if (options.subOptions.step) {
        if (e.key === 'ArrowRight') {
          setFrame((f) => (f === 30 ? 0 : f + 1));
        }
        if (e.key === 'ArrowLeft') {
          setFrame((f) => (f === 0 ? 30 : f - 1));
        }
      }
    };

    window.addEventListener('keydown', onKeyPress);

    return () => window.removeEventListener('keydown', onKeyPress);
  }, [options]);

  const brushProps = translateBrushCoordinates(
    size.width * 2,
    size.height * 4,
    brushPoints[frame]
  );

  if (!options.value) return null;

  return (
    <StyledBrushMask
      brushProps={brushProps}
      maskSize={size}
      scrollY={window.scrollY}
    >
      <Parallax
        reverse
        modifyTop
        url={
          'https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/bltc4bc85cdd060c39f/6137eea8f825e542a1554b1d/Homepage_Story_Zaun.jpg'
        }
      />
    </StyledBrushMask>
  );
};

export default BrushMask;
