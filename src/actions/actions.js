import ApiClient from '../services/ApiClient';

export const REQUEST_BREEDS = 'BREEDS_PENDING';
export const RECEIVE_BREEDS = 'BREEDS_FULFILLED';
export const ERROR_BREEDS = 'BREEDS_REJECTED';

export const RESET_DISPLAY_AMOUNT = 'RESET_DISPLAY_AMOUNT';
export const INCREASE_DISPLAY_AMOUNT = 'INCREASE_DISPLAY_AMOUNT';

export const showMore = () => ({
  type: INCREASE_DISPLAY_AMOUNT,
});

export const resetGallery = () => ({
  type: RESET_DISPLAY_AMOUNT,
});

export const getRandomBreedsImages = () => dispatch => dispatch({
  type: 'BREEDS',
  payload: ApiClient.get('https://dog.ceo/api/breeds/image/random/16'),
});

export const getSelectedBreedImages = breed => dispatch => dispatch({
  type: 'BREEDS',
  payload: ApiClient.get(`https://dog.ceo/api/breed/${breed}/images/random/12`),
});
