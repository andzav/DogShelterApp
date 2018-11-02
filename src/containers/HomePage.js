import React, { Component } from 'react';

import ApiClient from '../services/ApiClient';
import Overview from '../components/Overview';
import AvailableBreeds from '../components/AvailableBreeds';
import Catalog from '../components/Catalog';
import withSpinner from '../components/withSpinner';

const AvailableBreedsWithSpinner = withSpinner(AvailableBreeds);
const CatalogWIthSpinner = withSpinner(Catalog);

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: [],
      isLoading: false,
      max: 3,
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
    const { img, isLoading, max } = this.state;
    return (
      <React.Fragment>
        <Overview headImg={this.state.img[1]}/>
        <hr></hr>
        <AvailableBreedsWithSpinner imgAvailable={img.slice(2, 11)} isLoading={isLoading} max={max} title="Available Breeds"/>
        <hr></hr>
        <CatalogWIthSpinner imgCatalog={this.state.img.slice(11, 15)} isLoading={isLoading}/>
      </React.Fragment>
    );
  }
}

export default HomePage;
