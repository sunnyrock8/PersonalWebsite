import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 31.2rem;
  height: 34.3rem;

  padding: 3.4rem 3.6rem;
  background-color: ${({ active, animation }) =>
    active && !animation ? 'var(--color-primary)' : 'default'};
  color: ${({ active, animation }) =>
    active && !animation ? '#fff' : 'default'};
  animation: ${({ active, animation }) =>
    active && animation ? 'activeAnimation 0.5s forwards' : 'none'};

  @keyframes activeAnimation {
    0% {
      background-color: #f6f6f8;
      color: #120945;
    }
    100% {
      background-color: var(--color-primary);
      color: #fff;
    }
  }

  /* box-shadow: ${({ active }) =>
    active ? '5px 5px 4.3rem rgba(var(--color-primary-rgb), 0.63)' : 'none'}; */
  cursor: ${({ onClick }) =>
    typeof onClick === 'function' ? 'pointer' : 'default'};
  & .Slide-title {
    font-weight: 700;
    letter-spacing: 0.06px;
    font-size: 1.9rem;

    margin-bottom: 1.9rem;
  }

  & .Slide-cta {
    font-weight: 500;
    font-size: 1.1rem;
    letter-spacing: 0.04px;
    color: inherit;
    text-decoration: none;
    &::after {
      content: '→';
      display: inline-block;
      font-weight: 500;
      font-size: 1.1rem;
      letter-spacing: 0.04px;
      color: ${({ active }) => (active ? '#fff' : '#120945')};
      margin-left: 0.5rem;
      transition: transform 0.3s;
    }
  }
`;

class Slide extends Component {
  static defaultProps = {
    linkLabel: 'Discover More',
  };

  render() {
    return (
      <StyledDiv {...this.props} className="Slide">
        <div className="Slide-content">
          <h3 className="Slide-title">{this.props.title}</h3>
          <Link to={this.props.linkTo} className="Slide-cta">
            {this.props.linkLabel}
          </Link>
        </div>
      </StyledDiv>
    );
  }
}

export default Slide;
