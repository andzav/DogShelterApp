import React from 'react';
import Gallery from './Gallery';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 100vw;
`;

function AvailableBreeds(props){
    return (
      <Wrapper>
        <h1>Available Breeds</h1>
        <Gallery imgAvailable={props.imgAvailable} max={props.max}/>
      </Wrapper>
    )
}

export default AvailableBreeds;