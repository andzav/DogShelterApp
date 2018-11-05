import { connect } from 'react-redux';

import HomePage from '../components/HomePage';

import {
  getBreeds,
  showMore,
  resetGallery,
} from '../actions/actions';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  headImg: state.img[1],
  availableBreedsImg: state.img.slice(2, 2 + state.minDisplayAmount),
  catalogImg: state.img.slice(11, 15),
  minDisplayAmount: state.minDisplayAmount,
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(showMore()),
  loadBreeds: () => dispatch(getBreeds()),
  refreshGallery: () => dispatch(resetGallery()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
