import React, { Component } from 'react';
import styled from 'styled-components';

import PrimaryButton from '../../components/PrimaryButton';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import Text from '../../components/Text';

import NavBar from '../../layout/NavBar';

const StyledHeader = styled.header`
  width: 100vw;
  height: 100vh;
  padding: 4.9rem 7.5rem 0 17.6rem;

  @media only screen and (max-width: 70.625em) {
    padding: 5rem 12rem;
  }

  @media only screen and (max-width: 46.25em) {
    padding: 3rem 4rem;
  }

  overflow: hidden;

  @media only screen and (max-width: 56.25em) {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  position: relative;

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    @media only screen and (max-width: 29.375em) {
      justify-content: flex-end;
    }
  }

  & h1 {
    margin-top: 12.9rem;

    @media only screen and (max-width: 56.25em) {
      text-align: center;
    }
  }

  & p {
    margin-top: 3.9rem;

    @media only screen and (max-width: 56.25em) {
      text-align: center;
    }
  }

  & .Header-location {
    display: flex;
    align-items: center;
    margin-top: 1.7rem;

    @media only screen and (max-width: 56.25em) {
      justify-content: center;
    }

    &-icon {
      display: none;
      height: 2.8rem;
    }

    &-text {
      font-size: 1.5rem;
      color: var(--color-primary);
      font-weight: 500;
      letter-spacing: 0.11px;
      /* margin-left: 3.8rem; */
      text-decoration-style: dashed;
      text-underline-offset: 5px;
      transition: color 0.3s;

      &:hover {
        color: var(--color-primary-dark);
      }
    }
  }

  & button {
    margin-top: 12.9rem;
    width: fit-content;

    @media only screen and (max-width: 56.25em) {
      margin-top: 6.2rem;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 75vw;
    height: 75vw;
    border-radius: 50%;
    transform: translate(50%, 50%);
    background-color: var(--color-primary);
    z-index: -1;

    @media only screen and (max-width: 70.625em) {
      display: none;
    }
  }

  & .Header-container {
    display: flex;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 56.25em) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: flex-start;
      margin-top: 15rem;
    }

    @media only screen and (max-width: 46.25em) {
      margin-top: 5rem;
    }
  }

  & .Header-content {
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 56.25em) {
      align-items: center;
    }
  }

  & .Header-bitmoji {
    position: absolute;
    right: 15%;
    top: 50%;
    transform: scale(0.75) translateY(-50%);
    z-index: 0;

    @media only screen and (max-width: 70.625em) {
      right: 5%;
    }

    @media only screen and (max-width: 56.25em) {
      position: relative;
      top: default;
      right: default;
      width: 30rem;
      transform: scale(1) translate(12%, -110%);
      transform-origin: top;
    }

    @media only screen and (max-width: 33.125em) {
      transform: scale(1) translate(10%, -110%);
    }

    @media only screen and (max-width: 28.125em) {
      width: 25rem;
      transform: scale(1) translate(7%, -130%);
    }
  }

  & .Header-logo {
    @media only screen and (max-width: 29.375em) {
      display: none;
    }
  }

  & .Header-social-bar {
    display: flex;
    align-items: stretch;
    position: absolute;
    right: 5.1rem;
    bottom: 4rem;

    @media only screen and (max-width: 56.25em) {
      display: none;
    }
  }

  & .Header-social {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    padding: 8px;
    width: 4.9rem;
    border-radius: 1rem;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-0.3rem);
    }

    &:not(:last-child) {
      margin-right: 1.2rem;
    }
  }

  & .Header-social-bar-mobile {
    display: none;
    justify-content: center;
    align-items: stretch;
    background-color: var(--color-primary);
    padding: 1.4rem 7.5rem;
    width: 100vw;
    transform: translateY(6.4rem);

    @media only screen and (min-width: 56.25em) {
      display: none;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <nav>
          <Logo className="Header-logo" />
          <NavBar />
        </nav>

        <div className="Header-container">
          <div className="Header-content">
            <Title>
              Aarush
              <br />
              Yadav
            </Title>
            <Text>Designer | Full Stack Developer</Text>
            <div className="Header-location">
              <img
                src="/location_pin_icon.svg"
                alt="Location Pin Icon"
                className="Header-location-icon"
              />
              <a
                href="https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0821978,72.7410999,11z/data=!3m1!4b1!4m5!3m4!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559"
                target="_blank"
                className="Header-location-text"
              >
                Mumbai, India
              </a>
            </div>
            <PrimaryButton>Let's talk</PrimaryButton>
            <div className="Header-social-bar-mobile">
              <a
                href="https://github.com/sunnyrock8"
                target="_blank"
                className="Header-social"
              >
                <img src="/github_icon.svg" alt="Github Icon" />
              </a>
              <a
                href="mailto:aarush@aarushyadav.dev"
                target="_blank"
                className="Header-social"
              >
                <img src="/email_icon.svg" alt="Email Icon" />
              </a>
              <a
                href="tel:+917710000481"
                target="_blank"
                className="Header-social"
              >
                <img src="/phone_icon.svg" alt="Phone Icon" />
              </a>
            </div>
          </div>
          <img src="/bitmoji.svg" alt="Bitmoji" className="Header-bitmoji" />
        </div>

        <div className="Header-social-bar">
          <a
            href="https://github.com/sunnyrock8"
            target="_blank"
            className="Header-social"
          >
            <img src="/github_icon.svg" alt="Github Icon" />
          </a>
          <a
            href="mailto:aarush@aarushyadav.dev"
            target="_blank"
            className="Header-social"
          >
            <img src="/email_icon.svg" alt="Email Icon" />
          </a>
          <a href="tel:+917710000481" target="_blank" className="Header-social">
            <img src="/phone_icon.svg" alt="Phone Icon" />
          </a>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
