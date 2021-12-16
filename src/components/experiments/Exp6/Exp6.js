import React, { useState, useEffect, useCallback } from 'react';
import Parallax from './Parallax';
import BackgroundMask from './BackgroundMask';
import BrushMask from './BrushMask';
import styled from 'styled-components';
import Options from './Options';
import './styles.css';

const StyledWindow = styled.div`
  height: 10000px;
`;

const StyledContainer = styled.div`
  height: 300vh;
  background-color: gray;
`;

const StyledSection = styled.section`
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: darkslategray;
  overflow: hidden;
`;

const Exp6 = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [options, setOptions] = useState({
    front: {
      subOptions: {},
      value: true,
    },
    background: {
      subOptions: { gradient: true, brush: true },
      value: true,
    },
    brush: { subOptions: { step: false }, value: true },
  });

  const ref = useCallback((node) => {
    setSize({
      width: node.getBoundingClientRect().width,
      height: node.getBoundingClientRect().height,
    });
  }, []);

  useEffect(() => {
    const onResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', onResize);
  }, [ref]);

  return (
    <StyledWindow>
      <Options options={options} setOptions={setOptions} />
      <StyledContainer>
        <StyledSection ref={ref}>
          {options.front.value && (
            <Parallax
              url={
                'https://images.contentstack.io/v3/assets/blt0952b6ad20dfb00a/blt92a5b305a44aa719/6137ee9c55591350216ab218/Homepage_Story_Piltover.jpg'
              }
            />
          )}
          <BackgroundMask size={size} options={options.background} />
          <BrushMask size={size} options={options.brush} />
        </StyledSection>
      </StyledContainer>
    </StyledWindow>
  );
};

export default Exp6;
