import React, { Component } from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  color: #120745;
  font-weight: 700;
  font-size: 4.4rem;
  letter-spacing: 0.12px;
`;

class Subtitle extends Component {
  render() {
    return <StyledH2 {...this.props}>{this.props.children}</StyledH2>;
  }
}

export default Subtitle;
