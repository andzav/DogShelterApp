import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Overview from '../components/Overview';
import AvailableBreeds from '../components/AvailableBreeds';
import Catalog from '../components/Catalog';
import withSpinner from '../components/withSpinner';

import {
  getBreedsMiddleware,
  showMore,
  resetGallery,
} from '../actions/actions';

const AvailableBreedsWithSpinner = withSpinner(AvailableBreeds);
const CatalogWIthSpinner = withSpinner(Catalog);

class HomePage extends Component {
  componentDidMount() {
    const { loadBreeds, refreshGallery } = this.props;
    loadBreeds();
    refreshGallery();
  }

  render() {
    const {
      img,
      isLoading,
      minDisplayAmount,
      loadMore,
    } = this.props;
    return (
      <React.Fragment>
        <Overview headImg={img[1]}/>
        <hr></hr>
        <AvailableBreedsWithSpinner
          imgAvailable={img.slice(2, 11)}
          onClick={() => loadMore()}
          isLoading={isLoading}
          minDisplayAmount={minDisplayAmount}
          title="Available Breeds"/>
        <hr></hr>
        <CatalogWIthSpinner
          imgCatalog={img.slice(11, 15)}
          isLoading={isLoading}/>
      </React.Fragment>
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

HomePage.propTypes = {
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
)(HomePage);
