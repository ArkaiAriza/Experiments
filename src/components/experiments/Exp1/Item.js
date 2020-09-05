import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledItem = styled.div`
  position: absolute;
  max-height: 100%;
  left: ${({ left }) => `${left}%`};
  min-width: 30%;
  max-width: 30%;
  z-index: 0;
  background-color: #111;
  color: #ccc;
  z-index: ${({ selected }) => (selected ? 1 : 0)};
  transform: ${({ selected }) => (selected ? 'scale(1.4,1.4)' : 'scale(1,1)')};
  transition: left 1s ease, transform 0.5s ease;
  display: ${({ display }) => (display ? 'flex' : 'none')};
`;

const StyledImage = styled.img`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: ${({ selected }) => (selected ? 1 : 0)};
  background-color: #111;
  color: #ccc;
`;

const StyledGradient = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 0;
  background-color: #111;
  opacity: ${({ selected }) => (selected ? 0 : 0.5)};
  transition: opacity 0.7s;
`;

const Item = ({ movie, selected, onSelected, left, display }) => {
  //console.log(left);
  return (
    <StyledItem
      onClick={onSelected}
      selected={selected}
      left={left}
      display={display}
    >
      <StyledImage
        selected={selected}
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt='a'
      ></StyledImage>
      <StyledGradient selected={selected}></StyledGradient>
    </StyledItem>
  );
};

export default Item;
