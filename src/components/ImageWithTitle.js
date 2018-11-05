import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
  const breedLink = `/breed/${breed.split(' ')[0]}`;
  return (
    <Link to={breedLink}>
      <ImageWrap>
        <ImageView src={image} alt={breed}></ImageView>
        <ImageCaption>{breed}</ImageCaption>
      </ImageWrap>
    </Link>
  );
}

ImageWithTitle.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageWithTitle;
