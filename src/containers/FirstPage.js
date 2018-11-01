import React from 'react';
import ApiClient from '../services/ApiClient';

import Gallery from '../components/Gallery';
import styled from 'styled-components';
import withSpinner from '../components/Spinner';

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

class FirstPageContainer extends React.Component{
      constructor(props){
        super(props);
        this.state = {max: 3, buttonVisible: "block", img: [], isLoading: false};
      }

      componentDidMount(){
        this.handleFetch(true);
      }
    
      handleFetch = () => {
        this.setState({isLoading: true, img: []});
        ApiClient.get('https://dog.ceo/api/breeds/image/random/16').then(resp => setTimeout( () => this.setState({img: resp.message, isLoading: false}), 1500)).catch( err => console.log(err));
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
        const GalleryWithSpinner = withSpinner(
            Gallery
        );
        return (
          <Wrapper>
            <h1>DogShelter</h1>
            <GalleryWithSpinner imgAvailable={this.state.img} max={this.state.max} isLoading={this.state.isLoading}/>
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

export default FirstPageContainer;