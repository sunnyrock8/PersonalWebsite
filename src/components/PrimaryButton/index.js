import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background-color: var(--color-primary);
  color: #fff;
  padding: 1.4rem 4rem;
  text-align: center;
  border-radius: 0.8rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.8rem;
  transition: all 0.3s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-0.3rem);
  }
`;

class PrimaryButton extends Component {
  render() {
    return <StyledButton>{this.props.children}</StyledButton>;
  }
}

export default PrimaryButton;
