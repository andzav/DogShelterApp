import { connect } from 'react-redux';

import { getAllImagesDisplay } from '../selectors';
import FirstPage from '../components/FirstPage';

import {
  getRandomBreedsImages,
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
  loadBreeds: () => dispatch(getRandomBreedsImages()),
  refreshGallery: () => dispatch(resetGallery()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPage);
