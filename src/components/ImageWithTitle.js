import React from 'react';
import styled from 'styled-components';

const ImageWrap = styled.figure`
  margin-right: 100px;
  margin-left: 100px;
`;

const ImageView = styled.img`
  height: 300px; 
  width: 300px; 
  object-fit: contain;
  padding: 0;
`;

const ImageCaption = styled.figcaption`
  text-align: center;
  text-transform: capitalize;
`;

function ImageWithTitle(props){
  let breed = props.image.split('/')[4].replace('-', ' ');
  return (
    <ImageWrap>
      <ImageView src={props.image} alt={breed}></ImageView>
      <ImageCaption>{breed}</ImageCaption>
    </ImageWrap>
  );
}

export default ImageWithTitle;