import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const StyledItem = styled.div`
  display: flex;
  position: absolute;
  top: 2%;
  height: 96%;
  width: 45%;
  z-index: 0;
  background-color: #111;
  color: #ccc;
  z-index: ${({ selected }) => (selected ? 1 : 0)};
  transform: ${({ selected }) =>
    selected ? 'scale(1.03,1.03)' : 'scale(1,1)'};

  transition: height 1s, width 1s, left 1s, margin-top 1s, line-height 1s,
    background-color 1s, transform 1s;
  left: ${(props) => props.left}%;

  &.left-enter {
    opacity: 0;
    left: $level2-left - $level2-width;
    height: $level2-height - 30;
    width: $level2-width - 20;
    line-height: $level2-height - 30;
    margin-top: 40px;
  }

  &.left-enter.left-enter-active {
    opacity: 1;
    left: $level2-left;
    height: $level2-height;
    width: $level2-width;
    line-height: $level2-height;
    margin-top: 25px;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s,
      line-height 1s;
  }

  &.left-leave {
    opacity: 1;
    left: $level-2-left;
    height: $level2-height;
    width: $level2-width;
    line-height: $level2-height;
    margin-top: 25px;
  }

  &.left-leave.left-leave-active {
    left: $level-2-left + $level2-width + 20;
    opacity: 0;
    height: $level2-height - 30;
    line-height: 120px;
    margin-top: 40px;
    width: $level2-width - 20;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s,
      line-height 1s;
  }

  &.right-enter {
    opacity: 0;
    left: $level-2-left + $level2-width;
    height: $level2-height - 30;
    width: $level2-width - 20;
    line-height: $level2-height - 30;
    margin-top: 40px;
  }

  &.right-enter.right-enter-active {
    left: $level-2-left;
    opacity: 1;
    height: $level2-height;
    margin-top: 25px;
    line-height: $level2-height;
    width: $level2-width;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s,
      line-height 1s;
  }

  &.right-leave {
    left: $level2-left;
    height: $level2-height;
    opacity: 1;
    margin-top: 25px;
    line-height: $level2-height;
    width: $level2-width;
  }

  &.right-leave.right-leave-active {
    left: $level2-left - $level2-width;
    opacity: 0;
    height: $level2-height - 30;
    width: $level2-width - 20;
    line-height: $level2-height - 30;
    margin-top: 40px;
    transition: left 1s, opacity 1s, height 1s, width 1s, margin-top 1s,
      line-height 1s;
  }
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;

  object-fit: cover;
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

const Item = ({ movie, selected, onClick, left, display }) => {
  //console.log(left);
  return (
    <StyledItem
      onClick={onClick}
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
