import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function ImageWithTitle({ image }) {
  const breed = image.split('/')[4].replace('-', ' ');
  return (
    <ImageWrap>
      <ImageView src={image} alt={breed}></ImageView>
      <ImageCaption>{breed}</ImageCaption>
    </ImageWrap>
  );
}

ImageWithTitle.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageWithTitle;
