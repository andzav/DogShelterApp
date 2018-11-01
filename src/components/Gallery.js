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
  constructor(props) {
    super(props);
    this.state = { max: this.props.max, isVisible: true };
  }

  handleClick = () => {
    this.setState((state) => {
      if (state.max + 3 >= this.props.imgAvailable.length) {
        return { isVisible: false, max: state.max + 3 };
      }

      return { isVisible: true, max: state.max + 3 };
    });
  }

  render() {
    const { max, isVisible } = this.state;
    return (
      <React.Fragment>
        <ImgContainer>
          {this.props.imgAvailable.slice(0, max).map(image => (
            <ImageWithTitle key={image.toString()} image={image}/>
          ))}
        </ImgContainer>
        <LoadMore onClick={this.handleClick} visible={isVisible}>See more</LoadMore>
      </React.Fragment>
    );
  }
}

Gallery.propTypes = {
  max: PropTypes.number,
  imgAvailable: PropTypes.array,
};

export default Gallery;
