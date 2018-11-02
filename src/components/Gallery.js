import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageWithTitle from './ImageWithTitle';

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const LoadMore = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 20px;
  width: 250px;
  margin-left: calc(50% - 125px);
  display: ${props => (props.visible ? 'block' : 'none')}
`;

class Gallery extends React.Component {
  render() {
    const {
      minDisplayAmount,
      imgAvailable,
      onClick,
    } = this.props;
    const visible = minDisplayAmount < imgAvailable.length;
    return (
      <React.Fragment>
        <ImgContainer>
          {imgAvailable.slice(0, minDisplayAmount).map(image => (
            <ImageWithTitle key={image.toString()} image={image}/>
          ))}
        </ImgContainer>
        <LoadMore onClick={onClick} visible={visible}>
          See more
        </LoadMore>
      </React.Fragment>
    );
  }
}

Gallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  minDisplayAmount: PropTypes.number.isRequired,
  imgAvailable: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Gallery;
