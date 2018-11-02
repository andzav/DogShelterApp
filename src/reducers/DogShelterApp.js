import {
  REQUEST_BREEDS,
  RECEIVE_BREEDS,
  RESET_DISPLAY_AMOUNT,
  INCREASE_DISPLAY_AMOUNT,
} from '../actions/actions';

function getImages(state = {
  isLoading: false,
  img: [],
  minDisplayAmount: 3,
}, action) {
  switch (action.type) {
    case REQUEST_BREEDS:
      return Object.assign({}, state, {
        isLoading: true,
        img: [],
      });
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        isLoading: false,
        img: action.images,
      });
    case RESET_DISPLAY_AMOUNT:
      return Object.assign({}, state, {
        minDisplayAmount: 3,
      });
    case INCREASE_DISPLAY_AMOUNT:
      return Object.assign({}, state, {
        minDisplayAmount: state.minDisplayAmount + 3,
      });
    default:
      return state;
  }
}

export default getImages;
