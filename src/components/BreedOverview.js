import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AvailableBreeds from './AvailableBreeds';
import withSpinner from './WithSpinner';

const AvailableBreedsWithSpinner = withSpinner(AvailableBreeds);

class BreedOverviewPage extends Component {
  render() {
    const {
      isLoading,
      minDisplayAmount,
      loadMore,
      img,
      match,
    } = this.props;
    const title = img.length > 0 ? match.params.breed : 'No images found. Sorry';
    return (
      <React.Fragment>
        <AvailableBreedsWithSpinner
          imgAvailable={img}
          onClick={loadMore}
          isLoading={isLoading}
          minDisplayAmount={minDisplayAmount}
          title={title}/>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const {
      loadBreeds,
      refreshGallery,
      match,
    } = this.props;
    loadBreeds(match.params.breed);
    refreshGallery();
  }
}

BreedOverviewPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  img: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  minDisplayAmount: PropTypes.number.isRequired,
  loadBreeds: PropTypes.func.isRequired,
  match: PropTypes.any.isRequired,
  loadMore: PropTypes.func.isRequired,
  refreshGallery: PropTypes.func.isRequired,
};

export default BreedOverviewPage;
