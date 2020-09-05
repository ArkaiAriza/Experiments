import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import axios from 'axios';

import Item from './Item';

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  height: 500px;
  width: 100%;
  background-color: #111;
  overflow: visible;
  align-items: center;
`;

const Exp1 = () => {
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const request = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7628678618ac32f475108f4113de77d8`
      );
      setList(response.data.results);
    };
    request();
  }, []);

  const handleSelection = (index) => {
    setSelectedItem(index);
  };

  const renderItems = () => {
    const base = 35;
    const separation = 40;

    var items = [];
    var itemIndex = 0;

    for (var i = -2; i < 3; i++) {
      if (selectedItem + i < 0) itemIndex = selectedItem + i + list.length;
      else if (selectedItem + i > list.length - 1)
        itemIndex = selectedItem + i - list.length;
      else itemIndex = selectedItem + i;

      items.push({ movie: list[itemIndex], itemIndex });
    }

    console.log(items);

    return items.map(({ itemIndex, movie }, index) => {
      if (index < 2) {
        return (
          <Item
            key={movie.id}
            movie={movie}
            onSelected={() => handleSelection(itemIndex)}
            selected={false}
            left={base + (index - 2) * separation}
            display={index < 5 || index > 9 ? true : true}
          ></Item>
        );
      } else if (index > 2) {
        return (
          <Item
            key={movie.id}
            movie={movie}
            onSelected={() => handleSelection(itemIndex)}
            selected={false}
            left={base + (index - 2) * separation}
            display={index < 7 || index > 11 ? true : true}
          ></Item>
        );
      } else {
        return (
          <Item
            key={movie.id}
            movie={movie}
            selected
            left={base}
            display={true}
          ></Item>
        );
      }
    });
  };

  return <StyledContainer>{list.length > 0 && renderItems()}</StyledContainer>;
};

export default Exp1;
