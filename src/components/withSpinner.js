import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../logo.svg';

const SpinAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerDiv = styled.div`
  display: block;
  height: 10vh;
`;

const AnimImg = styled.img`
  display: block;
  margin-left: calc(50% - 5vmin);
  animation: ${SpinAnim} infinite 20s linear;
  height: 10vmin;
  width: 10vmin;
  padding: 0;
`;

function withSpinner(WrappedComponent) {
  return class A extends React.Component {
    render() {
      const { isLoading } = this.props;
      return isLoading ? <SpinnerDiv><AnimImg src={logo} alt="logo"></AnimImg></SpinnerDiv> : <WrappedComponent {...this.props} />;
    }
  };
}

export default withSpinner;
