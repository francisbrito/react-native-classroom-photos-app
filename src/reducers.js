import { combineReducers } from 'redux';

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

export const rootReducer = combineReducers({
  courses: courseReducer,
  pictures: pictureReducer,
});
