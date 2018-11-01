import React from 'react';
import ImageWithTitle from './ImageWithTitle';
import styled from 'styled-components';

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
`;

class Gallery extends React.Component{
      constructor(props){
        super(props);
        this.state = {max: this.props.max, buttonVisible: "block"};
      }

      handleClick = () => {
        this.setState({max: this.state.max+3});
        this.setState((state) => {
          if (state.max >= this.props.imgAvailable.length){
            return {buttonVisible: this.setState({buttonVisible: "none"})};
          }else{
            return {buttonVisible: this.setState({buttonVisible: "block"})};
          }
        })
        
      }

      render(){
        return (
          <>
            <ImgContainer>
              {this.props.imgAvailable.slice(0, this.state.max).map(image => 
                <ImageWithTitle key={image.toString()} image={image}/>
              )}
            </ImgContainer>
            <LoadMore onClick={this.handleClick} style={{display:this.state.buttonVisible}}>See more</LoadMore>
          </>
        )
      }
}

export default Gallery;