import React, { Component } from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 27rem;
`;

class Logo extends Component {
  render() {
    return (
      <a href="#header">
        <StyledImg src="/logo.png" {...this.props} />
      </a>
    );
  }
}

export default Logo;
