import React, { Component } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  font-weight: 600;
  color: #777584;
  font-size: 1.8rem;
  letter-spacing: 0.21px;
`;

class Text extends Component {
  render() {
    return <StyledP {...this.props}>{this.props.children}</StyledP>;
  }
}

export default Text;
