import { connect } from 'react-redux';

import { getAllImagesDisplay } from '../selectors';
import BreedOverview from '../components/BreedOverview';

import {
  getSelectedBreedImages,
  showMore,
  resetGallery,
} from '../actions/actions';

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  img: getAllImagesDisplay(state),
  minDisplayAmount: state.minDisplayAmount,
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(showMore()),
  loadBreeds: breed => dispatch(getSelectedBreedImages(breed)),
  refreshGallery: () => dispatch(resetGallery()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BreedOverview);
