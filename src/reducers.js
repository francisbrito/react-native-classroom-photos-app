import { combineReducers } from 'redux';

import { Types } from './actions';

const initialCourses = [
  {
    id: '1',
    name: 'ACM101',
  },
  {
    id: '2',
    name: 'ACM102',
  },
  {
    id: '3',
    name: 'ACM103',
  },
  {
    id: '4',
    name: 'CBM101',
  },
  {
    id: '5',
    name: 'CBM102',
  },
  {
    id: '6',
    name: 'GCM101',
  },
  {
    id: '11',
    name: 'ACM101',
  },
  {
    id: '12',
    name: 'ACM102',
  },
  {
    id: '13',
    name: 'ACM103',
  },
  {
    id: '14',
    name: 'CBM101',
  },
  {
    id: '15',
    name: 'CBM102',
  },
  {
    id: '16',
    name: 'GCM101',
  },
];

export const courseReducer = (state = initialCourses, action) => {
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
