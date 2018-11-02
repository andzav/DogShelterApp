import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AvailableBreeds from '../components/AvailableBreeds';
import withSpinner from '../components/withSpinner';

import {
  getBreedsMiddleware,
  showMore,
  resetGallery,
} from '../actions/actions';

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

const AvailableBreedsWithSpinner = withSpinner(AvailableBreeds);

class FirstPageContainer extends React.Component {
  componentDidMount() {
    const { loadBreeds, refreshGallery } = this.props;
    loadBreeds();
    refreshGallery();
  }

  render() {
    const {
      img,
      minDisplayAmount,
      isLoading,
      loadMore,
    } = this.props;
    return (
      <Wrapper>
        <AvailableBreedsWithSpinner
          imgAvailable={img}
          onClick={loadMore}
          isLoading={isLoading}
          minDisplayAmount={minDisplayAmount}
          title="Dog Shelter"/>
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

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  img: state.img,
  minDisplayAmount: state.minDisplayAmount,
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(showMore()),
  loadBreeds: () => dispatch(getBreedsMiddleware()),
  refreshGallery: () => dispatch(resetGallery()),
});

FirstPageContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  img: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  minDisplayAmount: PropTypes.number.isRequired,
  loadBreeds: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  refreshGallery: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPageContainer);
