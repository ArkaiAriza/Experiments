import React, { useState, useEffect } from 'react';

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
    <div
      style={{
        position: 'absolute',
        top: modifyTop
          ? `${-(-400 + 250 * Math.floor(window.scrollY / 310))}px`
          : 0,
        height: '100vh',
        width: '100vw',
        background: `url(${url}) center center / cover no-repeat`,
        transform: `translate3d(${reverse ? -x : x}%, ${
          reverse ? y : -y
        }%, 0px) scale(1.1, 1.1)`,
        transformOrigin: `${reverse ? 'left bottom' : 'right top'}`,
      }}
    ></div>
  );
};

export default Parallax;
