import React from 'react';
import styled from 'styled-components';

import ApiClient from '../services/ApiClient';
import Gallery from '../components/Gallery';
import withSpinner from '../components/withSpinner';

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

const GalleryWithSpinner = withSpinner(Gallery);

class FirstPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 3, buttonVisible: 'block', img: [], isLoading: false,
    };
  }

  componentDidMount() {
    this.handleFetch(true);
  }

  handleFetch = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await ApiClient.get('https://dog.ceo/api/breeds/image/random/16');
      setTimeout(() => this.setState({ img: response.message, isLoading: false }), 1500);
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { img, max, isLoading } = this.state;
    return (
      <Wrapper>
        <h1>DogShelter</h1>
        <GalleryWithSpinner imgAvailable={img} max={max} isLoading={isLoading}/>
        <ReviewForm>
          <h2>Leave your review</h2>
          <UserName type="text" placeholder="Fullname"></UserName>
          <UserReview placeholder="Description"></UserReview>
          <ReviewSubmit type="submit"></ReviewSubmit>
        </ReviewForm>
      </Wrapper>
    );
  }
}

export default FirstPageContainer;
