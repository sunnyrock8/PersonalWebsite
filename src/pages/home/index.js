import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Services from './Services';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Services />
      </>
    );
  }
}

export default Home;
