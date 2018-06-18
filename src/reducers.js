import { combineReducers } from 'redux';
import * as R from 'ramda';

import { Types } from './actions';

const initialCourses = {};

export const courseReducer = (state = initialCourses, action) => {
  switch (action.type) {
    case Types.SAVE_PICTURE:
      return {
        ...state,
        [action.payload.courseTag]: {
          ...R.pathOr({}, [action.payload.courseTag])(state),
          photos: [action.payload, ...R.pathOr([], [action.payload.courseTag, 'photos'])(state)],
        },
      };
    default:
      return state;
  }
};

export const pictureReducer = (state = [], action) => {
  switch (action.type) {
    case Types.SAVE_PICTURE:
      return [action.payload, ...state];
    default:
      return state;
  }
};

const initialCamera = {
  pictureSaved: false,
  hasTakenPicture: false,
  uri: null,
  timestamp: null,
};

export const cameraReducer = (state = initialCamera, action) => {
  switch (action.type) {
    case Types.TAKE_PICTURE_STARTED:
      return { ...state, hasTakenPicture: false };
    case Types.TAKE_PICTURE_DONE:
      return { ...state, hasTakenPicture: true, uri: action.payload.uri };
    case Types.CLEAR_PICTURE:
      return {
        ...state,
        hasTakenPicture: false,
        pictureSaved: false,
        uri: null,
      };
    case Types.SAVE_PICTURE:
      return {
        ...state,
        hasTakenPicture: true,
        pictureSaved: true,
        timestamp: action.payload.timestamp,
      };
    case Types.CHANGE_COURSE_TAG:
      return {
        ...state,
        courseTag: action.payload.courseTag,
      };
    case Types.CHANGE_CAPTION:
      return {
        ...state,
        caption: action.payload.caption,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  courses: courseReducer,
  pictures: pictureReducer,
  camera: cameraReducer,
});
