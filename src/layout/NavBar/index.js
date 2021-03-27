import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  & a {
    font-size: 1.7rem;
    font-weight: 600;
    color: #777584;
    letter-spacing: 0.12px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: var(--color-primary);
    }

    &:not(:last-child) {
      margin-right: 4.9rem;
    }
  }

  & .Nav-link {
    @media only screen and (max-width: 61.25em) {
      display: none;
    }
  }

  & .hamburger-opened {
    display: none;

    &:checked ~ .hamburger-icon {
      background-color: rgba(255, 255, 255, 0);

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    &:checked ~ .hamburger-nav {
      transform: scale(1) translate(30%, -30%);
    }
  }

  & .hamburger-icon {
    z-index: 2;
  }

  & .hamburger-bg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    background-color: #7562e0;
    padding: 1.5rem 1rem;

    & label {
      position: relative;
      display: inline-block;
      width: 2rem;
      height: 2px;
      background-color: #fff;
      transition: background-color 0.2s;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-8px);
        width: 2rem;
        height: 2px;
        background-color: #fff;
        transition: transform 0.4s;
        transform-origin: 50% 50%;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(8px);
        width: 2rem;
        height: 2px;
        background-color: #fff;
        transition: transform 0.4s;
        transform-origin: 50% 50%;
      }
    }

    @media only screen and (min-width: 61.25em) {
      display: none;
    }
  }

  & .hamburger-nav {
    position: absolute;
    top: 0;
    right: 0;
    transform: scale(0) translate(30%, -30%);
    transform-origin: 100% 0;
    transition: transform 1s cubic-bezier(0.7, 1.47, 0.42, 0.92);
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-items {
      display: flex;
      flex-direction: column;
      transform: translate(-150%, 70%);

      @media only screen and (max-width: 35.3125em) {
        transform: translate(-100%, 50%);
      }
    }

    background-color: var(--color-primary);
    width: 100vw;
    height: 100vw;

    border-radius: 50%;

    & a {
      text-align: center !important;
      width: 100%;
      color: #fff;
      margin: 0;
      font-size: 2rem;

      &:not(:last-child) {
        margin-bottom: 2.5rem;
      }
    }
  }
`;

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBoxChecked: false,
    };
    this.closeHamburger = this.closeHamburger.bind(this);
    this.openHamburger = this.openHamburger.bind(this);
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.setChecked = this.setChecked.bind(this);
  }

  closeHamburger() {
    this.setState({
      checkBoxChecked: false,
    });
  }

  openHamburger() {
    this.setState({
      checkBoxChecked: true,
    });
  }

  toggleHamburger() {
    this.setState((curState) => ({
      checkBoxChecked: !curState.checkBoxChecked,
    }));
  }

  setChecked(evt) {
    console.log('Setting checked');
    this.setState({
      checkBoxChecked: evt.target.checked,
    });
  }

  render() {
    return (
      <StyledNav>
        <a href="#services" className="Nav-link">
          Services
        </a>
        <a href="#portfolio" className="Nav-link">
          Portfolio
        </a>
        <a href="#contact" className="Nav-link">
          Contact
        </a>

        <div className="hamburger">
          <div className="hamburger-bg">
            <input
              type="checkbox"
              className="hamburger-opened"
              id="hamburger-opened"
              checked={this.state.checkBoxChecked}
              onChange={this.setChecked}
            />
            <div className="hamburger-nav">
              <div className="hamburger-nav-items">
                <a
                  href="#services"
                  className="hamburger-link"
                  onClick={this.closeHamburger}
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  className="hamburger-link"
                  onClick={this.closeHamburger}
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="hamburger-link"
                  onClick={this.closeHamburger}
                >
                  Contact
                </a>
              </div>
            </div>
            <label
              className="hamburger-icon"
              onClick={this.toggleHamburger}
            ></label>
          </div>
        </div>
      </StyledNav>
    );
  }
}

export default NavBar;
