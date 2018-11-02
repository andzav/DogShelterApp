import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Gallery from './Gallery';

const Wrapper = styled.div`
  text-align: center;
  width: 100vw;
`;

function AvailableBreeds(props) {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
      <Gallery imgAvailable={props.imgAvailable} max={props.max}/>
    </Wrapper>
  );
}

AvailableBreeds.propTypes = {
  imgAvailable: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  max: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default AvailableBreeds;
