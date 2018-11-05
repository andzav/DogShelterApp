import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import DogShelterApp from '../reducers/dogShelterApp';

export default function configureStore(preloadedState) {
  const store = createStore(
    DogShelterApp,
    preloadedState,
    applyMiddleware(thunkMiddleware, promiseMiddleware()),
  );
  return store;
}
