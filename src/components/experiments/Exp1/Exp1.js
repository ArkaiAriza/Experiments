import React, { useEffect, useState } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Item from './Item';

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 100%;
  background-color: #333;
  overflow: visible;
  align-items: center;
`;

const Exp1 = () => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7628678618ac32f475108f4113de77d8`
      );
      setItems(response.data.results);
    };
    request();
  }, []);

  const handleSelection = (index) => {
    //setSelectedItem(index);
  };

  const moveLeft = () => {
    var newActive = active;
    newActive--;
    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection('left');
  };

  const moveRight = () => {
    var newActive = active;
    setActive((newActive + 1) % items.length);
    setDirection('right');
  };

  const renderItems = () => {
    const base = 27;
    const separation = 46;

    var it = [];
    var itemIndex = 0;
    console.log(active);

    for (var i = active - 2; i < active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      console.log(index);
      it.push({ movie: items[index], index });
    }
    console.log(it);

    return it.map(({ itemIndex, movie }, index) => {
      console.log(movie);
      if (index < 2) {
        return (
          <Item
            key={movie.id}
            movie={movie}
            onClick={() => moveLeft()}
            selected={false}
            left={base + (index - 2) * separation}
          ></Item>
        );
      } else if (index > 2) {
        return (
          <Item
            key={movie.id}
            movie={movie}
            onClick={() => moveRight()}
            selected={false}
            left={base + (index - 2) * separation}
          ></Item>
        );
      } else {
        return <Item key={movie.id} movie={movie} selected left={base}></Item>;
      }
    });
  };

  return (
    <div>
      <StyledContainer>
        <CSSTransitionGroup transitionName={direction}>
          {items.length > 0 && renderItems()}
        </CSSTransitionGroup>
      </StyledContainer>
    </div>
  );
};

export default Exp1;
