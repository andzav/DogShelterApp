import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Gallery from './Gallery';

const Wrapper = styled.div`
  text-align: center;
  width: 100vw;
`;

const Title = styled.h1`
  text-transform: capitalize;
`;

function AvailableBreeds(props) {
  const {
    imgAvailable,
    onClick,
    minDisplayAmount,
    count,
  } = props;
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Gallery
        imgAvailable={imgAvailable}
        onClick={onClick}
        count={count}
        minDisplayAmount={minDisplayAmount}/>
    </Wrapper>
  );
}

AvailableBreeds.propTypes = {
  imgAvailable: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  minDisplayAmount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
};

export default AvailableBreeds;
