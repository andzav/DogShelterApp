import React, { Component } from 'react';

import ApiClient from '../services/ApiClient';
import Overview from '../components/Overview';
import AvailableBreeds from '../components/AvailableBreeds';
import Catalog from '../components/Catalog';

import withSpinner from '../components/Spinner';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      img: [],
      isLoading: false,
    }; 
  }

  componentDidMount(){
    this.handleFetch(true);
  }

  handleFetch = () => {
    this.setState({isLoading: true, img: []});
    ApiClient.get('https://dog.ceo/api/breeds/image/random/16').then(resp => setTimeout( () => this.setState({img: resp.message, isLoading: false}), 1500)).catch( err => console.log(err));
  }

  render() {
    const AvailableBreedsWithSpinner = withSpinner(
        AvailableBreeds
    );

    const CatalogWIthSpinner = withSpinner(
        Catalog
    );
    return (
            <>
                <Overview headImg={this.state.img[1]}/>
                <hr></hr>
                <AvailableBreedsWithSpinner imgAvailable={this.state.img.slice(2, 11)} isLoading={this.state.isLoading} max={3}/>
                <hr></hr>
                <CatalogWIthSpinner imgCatalog={this.state.img.slice(11, 15)} isLoading={this.state.isLoading}/>
            </>
    );
  }
}

export default HomePage;