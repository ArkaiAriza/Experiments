import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledParallax = styled.div.attrs(
  ({ top, url, translate, parallaxOrigin }) => ({
    style: {
      top: top,
      background: `url(${url}) center center / cover no-repeat`,
      transform: `translate3d(${translate}) scale(1.1, 1.1)`,
      transformOrigin: parallaxOrigin,
    },
  })
)`
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const Parallax = (props) => {
  const { url, modifyTop, reverse } = props;

  const limit = 10;
  const advance = 0.002;

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setX(
        window.scrollY * advance >= limit ? limit : window.scrollY * advance
      );
      setY(
        window.scrollY * advance >= limit ? limit : window.scrollY * advance
      );
    };

    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <StyledParallax
      top={
        modifyTop ? `${-(-400 + 250 * Math.floor(window.scrollY / 310))}px` : 0
      }
      translate={reverse ? `${-x}%, ${y}%, 0px` : `${x}%, ${-y}%, 0px`}
      parallaxOrigin={reverse ? 'left bottom' : 'right top'}
      url={url}
    />
  );
};

export default Parallax;
