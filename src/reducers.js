import { combineReducers } from 'redux';

import { Types } from './actions';

export const courseReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const pictureReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const cameraReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.TAKE_PICTURE_STARTED:
      return { ...state, hasTakenPicture: false };
    case Types.TAKE_PICTURE_DONE:
      return { ...state, hasTakenPicture: true, uri: action.payload.uri };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  courses: courseReducer,
  pictures: pictureReducer,
  camera: cameraReducer,
});
