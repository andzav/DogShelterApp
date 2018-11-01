import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageWithTitle from './ImageWithTitle';
import media from '../Themes/MediaTemplate';

const CatalogWrapper = styled.div`
  text-align: center;
  width: 100vw;
  align-items: center;
`;

const FormWrapper = styled.div`
  ${media.desktop`
    width: 10%;
    display: inline-block;
    margin: 5%;
  `}
  ${media.mobile`
    text-align: center;
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;

const Input = styled.input`
  display: block;
  width: 90%;
  box-sizing: border-box;
`;

const CatalogContent = styled.div`
  ${media.desktop`display: flex;`}
  ${media.mobile`display: block;`}
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  
  figure img{
    height: 150px; 
    width: 150px; 
    object-fit: contain;
    padding: 0;
  }
`;

function Catalog(props) {
  return (
    <CatalogWrapper>
      <h1>Look at our dogs</h1>
      <CatalogContent>
        <FormWrapper>
          <Input type="text"></Input>
          <Input type="submit" value="Find"></Input>
        </FormWrapper>
        <ImagesWrapper>
          {props.imgCatalog.map(image => (
            <ImageWithTitle key={image.toString()} image={image}/>
          ))}
        </ImagesWrapper>
      </CatalogContent>
    </CatalogWrapper>
  );
}

Catalog.propTypes = {
  imgCatalog: PropTypes.array,
};

export default Catalog;
