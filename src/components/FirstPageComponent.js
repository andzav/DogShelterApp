import React from 'react';
import Gallery from './Gallery';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  width: 100vw;
`;

const ReviewForm = styled.div`
  border: 2px solid black;
  width: 60%;
  margin: auto;
  margin-bottom: 5vh;
`;

const UserName = styled.input`
  width: 80%;
  margin: auto;
  box-sizing: border-box;
  font-size: 20px;
`;

const UserReview = styled.textarea`
  width: 80%;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  height: 10vh;
  font-size: 20px;
  box-sizing: border-box;
`;

const ReviewSubmit = styled.input`
  width: 50%;
  margin: auto;
  box-sizing: border-box;
  font-size: 20px;
  margin-bottom: 50px;
`;

class FirstPageComponent extends React.Component{
      constructor(props){
        super(props);
        this.state = {max: this.props.max, buttonVisible: "block"};
      }

      handleClick = () => {
        this.setState({max: this.state.max+3});
        this.setState((state) => {
          if (state.max >= this.props.images.length){
            return {buttonVisible: this.setState({buttonVisible: "none"})};
          }else{
            return {buttonVisible: this.setState({buttonVisible: "block"})};
          }
        })
      }

      render(){
        return (
          <Wrapper>
            <h1>DogShelter</h1>
            <Gallery imgAvailable={this.props.images} max={this.props.max}/>
            <ReviewForm>
                <h2>Leave your review</h2>
                <UserName type="text" placeholder="Fullname"></UserName>
                <UserReview placeholder="Description"></UserReview>
                <ReviewSubmit type="submit"></ReviewSubmit>
            </ReviewForm>
          </Wrapper>
        )
      }
}

export default FirstPageComponent;