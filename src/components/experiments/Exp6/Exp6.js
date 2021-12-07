import React, { useState, useEffect, useCallback } from 'react';
import Parallax from './Parallax';
import brush from './brush.png';
import { brushPoints, translateBrushCoordinates } from './resources';
import WithMask from './WithMask';

const Exp6 = () => {
  const advance = 1;
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY);
      setFrame(Math.floor(window.scrollY / 10) % 31);
    };

    window.addEventListener('scroll', onScroll);
  }, []);

  const ref = useCallback((node) => {
    setSize({
      width: node.getBoundingClientRect().width,
      height: node.getBoundingClientRect().height,
    });
  }, []);

  const [x, y, w, h] = translateBrushCoordinates(
    size.width * 2,
    size.height * 4,
    brushPoints[frame]
  );

  return (
    <div style={{ height: '10000px' }}>
      <div style={{ height: '300vh', backgroundColor: 'gray' }}>
        <section
          ref={ref}
          style={{
            height: '100vh',
            position: 'sticky',
            top: 0,
            backgroundColor: 'indigo',
            overflow: 'hidden',
          }}
        >
          <Parallax
            url={
              'https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/blt92a5b305a44aa719/6137ee9c55591350216ab218/Homepage_Story_Piltover.jpg'
            }
          />
          <WithMask />
          <div
            style={{
              position: 'absolute',
              height: h,
              width: w,
              top: `${-400 + 250 * Math.floor(window.scrollY / 310)}px`,
              backgroundColor: 'red',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: `${-x}px ${-y}px`,
              WebkitMaskSize: `${size.width * 2}px ${size.height * 4}px`,
              WebkitMaskImage: `url(${brush})`,
            }}
          >
            <Parallax
              reverse
              modifyTop
              url={
                'https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/bltc4bc85cdd060c39f/6137eea8f825e542a1554b1d/Homepage_Story_Zaun.jpg'
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exp6;
