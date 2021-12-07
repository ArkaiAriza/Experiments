import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 500px;

  width: 100%;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  width: 80%;
  background-color: grey;
`;

const Item = styled.div`
  position: absolute;
  height: 50%;
  width: 33.333333%;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  background-color: red;
  color: white;
  text-align: center;
  z-index: 1;
  &:hover {
    position: absolute;
    z-index: 5;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: blue;
    transition: 0.5s;
  }
  transition: 0.5s;
`;

const InnerItem = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  z-index: 1;
  &:hover {
    z-index: 2;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: blue;
    transition: 0.5s;
  }
  transition: 1s;
  transition: z-index 0s ease-out 0.5s;
`;

const Exp4 = () => {
  const [selected, setSelected] = useState('0');

  return (
    <Container>
      <InnerContainer>
        <Item onClick={() => setSelected('1')} top={0} left={0}>
          <h1>1</h1>
        </Item>
        <Item top={0} left={33.3333333}>
          <h1>2</h1>
        </Item>
        <Item top={0} left={66.6666666}>
          <h1>3</h1>
        </Item>
        <Item top={50} left={0}>
          <h1>4</h1>
        </Item>
        <Item top={50} left={33.3333333}>
          <h1>5</h1>
        </Item>
        <Item top={50} left={66.6666666}>
          <h1>6</h1>
        </Item>
      </InnerContainer>
    </Container>
  );
};

export default Exp4;
