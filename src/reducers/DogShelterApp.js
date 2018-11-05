import {
  REQUEST_BREEDS,
  RECEIVE_BREEDS,
  ERROR_BREEDS,
  RESET_DISPLAY_AMOUNT,
  INCREASE_DISPLAY_AMOUNT,
} from '../actions/actions';

const InitialState = {
  isLoading: false,
  img: [],
  minDisplayAmount: 3,
};

function getImages(state = InitialState, action) {
  console.log(action);
  switch (action.type) {
    case REQUEST_BREEDS:
      return Object.assign({}, state, {
        isLoading: true,
        img: [],
      });
    case RECEIVE_BREEDS:
      return Object.assign({}, state, {
        isLoading: false,
        img: action.payload.message,
      });
    case ERROR_BREEDS:
      return Object.assign({}, state, {
        isLoading: false,
        img: [],
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
