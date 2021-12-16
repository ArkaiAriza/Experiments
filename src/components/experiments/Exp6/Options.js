import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  z-index: 1000;
  top: 10px;
  right: 10px;
  min-width: 200px;
  background-color: #8188;
  backdrop-filter: blur(4px);
  border: 1px solid #fff3;
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  color: #ddd;
`;

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;

  & :last-child {
    border-bottom: 0px solid #fff3;
  }
`;

const StyledOption = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid #fff3;
`;

const StyledLabel = styled.label`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
  &:hover {
    background-color: #fff1;
  }
`;

const StyledSubOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSubOption = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 10px;
  justify-content: space-between;
`;

const Exp6 = ({ options, setOptions }) => {
  const handleOption = (bo, o) => {
    if (o) {
      setOptions((opt) => ({
        ...opt,
        [bo]: {
          ...opt[bo],
          subOptions: { ...opt[bo].subOptions, [o]: !opt[bo].subOptions[o] },
        },
      }));
    } else {
      setOptions((opt) => ({
        ...opt,
        [bo]: { ...opt[bo], value: !opt[bo].value },
      }));
    }
  };

  console.log(options);

  return (
    <StyledContainer>
      <StyledOptions>
        {Object.keys(options).map((bo) => {
          return (
            <StyledOption key={bo}>
              <StyledLabel>
                {bo}
                <input
                  type='checkbox'
                  checked={options[bo].value}
                  onClick={() => handleOption(bo)}
                />
              </StyledLabel>
              <StyledSubOptions>
                {Object.keys(options[bo].subOptions).map((o) => {
                  return (
                    <StyledSubOption key={o}>
                      <StyledLabel>
                        {o}
                        <input
                          type='checkbox'
                          checked={options[bo].subOptions[o]}
                          onClick={() => handleOption(bo, o)}
                        />
                      </StyledLabel>
                    </StyledSubOption>
                  );
                })}
              </StyledSubOptions>
            </StyledOption>
          );
        })}
      </StyledOptions>
    </StyledContainer>
  );
};

export default Exp6;
