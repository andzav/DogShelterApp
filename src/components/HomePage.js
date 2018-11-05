import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Overview from './Overview';
import AvailableBreeds from './AvailableBreeds';
import Catalog from './Catalog';
import withSpinner from './WithSpinner';

const AvailableBreedsWithSpinner = withSpinner(AvailableBreeds);
const CatalogWIthSpinner = withSpinner(Catalog);

class HomePage extends Component {
  render() {
    const {
      headImg,
      isLoading,
      minDisplayAmount,
      loadMore,
      catalogImg,
      availableBreedsImg,
    } = this.props;
    return (
      <React.Fragment>
        <Overview headImg={headImg}/>
        <hr></hr>
        <AvailableBreedsWithSpinner
          imgAvailable={availableBreedsImg}
          onClick={loadMore}
          isLoading={isLoading}
          minDisplayAmount={minDisplayAmount}
          title="Available Breeds"/>
        <hr></hr>
        <CatalogWIthSpinner
          imgCatalog={catalogImg}
          isLoading={isLoading}/>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { loadBreeds, refreshGallery } = this.props;
    loadBreeds();
    refreshGallery();
  }
}

HomePage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  headImg: PropTypes.string.isRequired,
  availableBreedsImg: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  catalogImg: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  minDisplayAmount: PropTypes.number.isRequired,
  loadBreeds: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  refreshGallery: PropTypes.func.isRequired,
};

export default HomePage;
