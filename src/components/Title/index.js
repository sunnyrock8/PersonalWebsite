import React, { Component } from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 7.4rem;
  color: #120945;
  letter-spacing: 0.48px;
  font-weight: 700;
`;

class Title extends Component {
  render() {
    return <StyledH1>{this.props.children}</StyledH1>;
  }
}

export default Title;
