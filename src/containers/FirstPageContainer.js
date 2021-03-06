import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllImagesDisplay, getImageCount } from '../selectors';
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
  count: getImageCount(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadMore: showMore,
  loadBreeds: getRandomBreedsImages,
  refreshGallery: resetGallery,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FirstPage);
