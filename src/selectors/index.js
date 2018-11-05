import { createSelector } from 'reselect';

const getMinDisplayAmountSelector = state => state.minDisplayAmount;
const getAllImagesSelector = state => state.img;
const getBreedsAmountSelector = state => (state.minDisplayAmount + 1 > 11
  ? 11
  : state.minDisplayAmount + 1);

export const getAllImagesDisplay = createSelector(
  getAllImagesSelector,
  getMinDisplayAmountSelector,
  (images, minDisplayAmount) => images.slice(0, minDisplayAmount),
);

export const getAvailableBreeds = createSelector(
  getAllImagesSelector,
  getBreedsAmountSelector,
  (images, minDisplayAmount) => images.slice(1, minDisplayAmount),
);

export const getCatalogImages = createSelector(
  getAllImagesSelector,
  images => images.slice(11, 15),
);

export const getMainImage = createSelector(
  getAllImagesSelector,
  images => images[0] || '',
);

export const getImageCount = createSelector(
  getAllImagesSelector,
  images => images.length,
);
