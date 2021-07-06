import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function CustomButton(props) {
  const StyledButton = styled(Button)`
    background-color: ${props.background};
    border: 3px solid ${props.background};
    border-radius: 30px;
    color: ${props.color};
    font-family: ${props.fontFamily ? props.fontFamily : 'Poppins'};
    font-size: 16px;
    font-weight: ${props.fontWeight ? props.fontWeight : 600};
    text-transform: none;
    &:hover {
      background-color: ${props.background};
      opacity: ${props.opacity};
      text-decoration: ${props.decoration};
      cursor: pointer;
    }
  `;

  return (
    <StyledButton>
      {props.content}
    </StyledButton>
  );
}

export default CustomButton;
