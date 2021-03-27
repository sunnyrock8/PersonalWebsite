import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from '../pages/home';

import './index.css';

class Routes extends Component {
  render() {
    return (
      <Route
        render={() => (
          <>
            <TransitionGroup>
              <CSSTransition timeout={2000} classNames="fade-up">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route exact render={() => <h1>Not Found!</h1>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </>
        )}
      />
    );
  }
}

export default Routes;
