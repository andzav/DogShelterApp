import ApiClient from '../services/ApiClient';

export const REQUEST_BREEDS = 'REQUEST_BREEDS';
export const RECEIVE_BREEDS = 'RECEIVE_BREEDS';

export const RESET_DISPLAY_AMOUNT = 'RESET_DISPLAY_AMOUNT';
export const INCREASE_DISPLAY_AMOUNT = 'INCREASE_DISPLAY_AMOUNT';

export const requestBreeds = () => ({
  type: REQUEST_BREEDS,
});

export const recieveBreeds = json => ({
  type: RECEIVE_BREEDS,
  images: json.message,
});

export const showMore = () => ({
  type: INCREASE_DISPLAY_AMOUNT,
});

export const resetGallery = () => ({
  type: RESET_DISPLAY_AMOUNT,
});

export const getBreeds = () => (dispatch) => {
  dispatch(requestBreeds());
  return ApiClient.get('https://dog.ceo/api/breeds/image/random/16')
    .then(response => setTimeout(() => dispatch(recieveBreeds(response)), 1500));
};

export const getBreedsMiddleware = () => dispatch => dispatch(getBreeds());
