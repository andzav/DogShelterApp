import { connect } from 'react-redux';

import { getMainImage, getAvailableBreeds, getCatalogImages } from '../selectors';
import HomePage from '../components/HomePage';

import {
  getRandomBreedsImages,
  showMore,
  resetGallery,
} from '../actions/actions';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  headImg: getMainImage(state),
  availableBreedsImg: getAvailableBreeds(state),
  catalogImg: getCatalogImages(state),
  minDisplayAmount: state.minDisplayAmount,
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(showMore()),
  loadBreeds: () => dispatch(getRandomBreedsImages()),
  refreshGallery: () => dispatch(resetGallery()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
