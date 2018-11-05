import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import DogShelterApp from '../reducers/dogShelterApp';

export default function configureStore(preloadedState) {
  const store = createStore(
    DogShelterApp,
    preloadedState,
    applyMiddleware(thunkMiddleware),
  );
  return store;
}
