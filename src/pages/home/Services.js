import React, { Component } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';

import Carousel, { Slide } from '../../components/Carousel';
import Subtitle from '../../components/Subtitle';
import Text from '../../components/Text';

const StyledDiv = styled.div`
  display: flex;

  width: 100vw;

  background-color: #fafbfd;
  padding: 18.5rem 5.1rem 0 17.6rem;

  @media only screen and (max-width: 61.25em) {
    padding: 5rem 5.1rem;
  }

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    align-items: center;

    & .Services-experience {
      width: 100% !important;
      &-title,
      &-caption {
        text-align: center;
      }

      &-title {
        margin-bottom: 2rem !important;
      }

      &-caption {
        margin-bottom: 5rem;
      }
    }

    & .Services-caption {
      text-align: center !important;
    }

    & .Services-carousel {
      margin-left: 0 !important;
    }

    & .Services-title {
      text-align: center;
    }
  }

  & .Services-experience {
    width: 35%;

    &-title {
      font-weight: 700;
      font-size: 9.9rem;
      color: #7562e0;
      letter-spacing: 0.6px;
      margin-bottom: 6.8rem;
    }

    &-caption {
      font-weight: 800;
      font-size: 2.7rem;
      color: #5d5778;
      letter-spacing: 0.08px;
    }
  }

  & .Services-main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  & .Services-caption {
    margin-top: 2rem;
    margin-bottom: 6.1rem;
  }

  & .Services-carousel {
    margin-left: -4rem;
  }
`;

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curSlide: 0,
    };
    this.slides = [
      {
        title: 'Frontend Developer',
        linkTo: '#portfolio',
      },
      {
        title: 'Backend Developer',
        linkTo: '#portfolio',
      },
      {
        title: 'UI/UX Designer',
        linkTo: '#portfolio',
      },
    ];
  }

  render() {
    return (
      <StyledDiv id="services">
        <div className="Services-experience">
          <h1 className="Services-experience-title">3+</h1>
          <h3 className="Services-experience-caption">
            Years
            <br />
            Experience
            <br />
            Working
          </h3>
        </div>
        <div className="Services-main">
          <Subtitle className="Services-title">
            Full Stack Developer and UI/UX <br />
            designer
          </Subtitle>
          <Text className="Services-caption">
            These are the main services I offer.
          </Text>
          <Carousel slides={this.slides} className="Services-carousel" />
        </div>
      </StyledDiv>
    );
  }
}

export default Services;
