import React, { Component } from 'react';
import styled from 'styled-components';

import Slide from './Slide';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  height: 40rem;
  width: 100%;
  overflow-x: hidden;

  & .Slide {
    position: absolute;
    top: 50%;
    left: 0;
    transition: transform 1s;
    transform: translateY(-50%);

    margin-left: 4rem;

    @media only screen and (max-width: 56.25em) {
      margin-left: 0;
    }

    &:not(:last-child) {
      margin-right: 2.7rem;
    }
  }
`;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curSlide: 0,
      lastSlide: this.props.slides.length - 1,
      transformBias: 0,
    };

    this.getTransforms = this.getTransforms.bind(this);
    this.setSlide = this.setSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.changeSlideCallback = this.changeSlideCallback.bind(this);

    this.changeSlide = setInterval(this.changeSlideCallback, 2500);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.previousSlide();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
    });
  }

  getTransforms() {
    const firstTransform =
      this.state.curSlide * -110 + (this.state.transformBias / 312) * 100;

    let curTransform = firstTransform;
    const transforms = [firstTransform];

    for (let i = 1; i <= this.state.lastSlide; i++) {
      curTransform += 110 + (this.state.transformBias / 312) * 100;
      transforms.push(curTransform);
    }
    return transforms;
  }

  changeSlideCallback() {
    this.setState((curState) => ({
      ...curState,
      curSlide:
        curState.curSlide < curState.lastSlide ? curState.curSlide + 1 : 0,
    }));
  }

  setSlide(i) {
    clearInterval(this.changeSlide);
    this.setState({
      curSlide: i,
    });
    this.changeSlide = setInterval(this.changeSlideCallback, 2500);
  }

  previousSlide() {
    const newSlide =
      this.state.curSlide > 0 ? this.state.curSlide - 1 : this.state.lastSlide;
    this.setSlide(newSlide);
  }

  nextSlide() {
    const newSlide =
      this.state.curSlide < this.state.lastSlide ? this.state.curSlide + 1 : 0;
    this.setSlide(newSlide);
  }

  render() {
    const transforms = this.getTransforms();
    return (
      <StyledDiv {...this.props}>
        {this.props.slides.map((slide, i) => (
          <Slide
            title={slide.title}
            linkTo={slide.linkTo}
            active={i === this.state.curSlide}
            style={{
              transform: `translate(${transforms[i]}%, -50%)`,
            }}
            onClick={() => this.setSlide(i)}
            key={i}
          />
        ))}
      </StyledDiv>
    );
  }
}

export default Carousel;
export { Slide };
