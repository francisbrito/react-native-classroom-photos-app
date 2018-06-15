import mirror from 'mirror-creator';
import { createAction } from 'redux-actions';

export const Types = mirror([
  'TAKE_PICTURE_STARTED',
  'TAKE_PICTURE_DONE',
  'TAKE_PICTURE',
  'CLEAR_PICTURE',
  'SAVE_PICTURE',
  'CHANGE_COURSE_TAG',
  'CHANGE_CAPTION',
]);

export const takePictureStarted = createAction(Types.TAKE_PICTURE_STARTED);
export const takePictureDone = createAction(Types.TAKE_PICTURE_DONE);

export const takePicture = ({ camera }) => (dispatch) => {
  dispatch(takePictureStarted());

  camera
    .takePictureAsync({ width: 360, skipProcessing: true })
    .then(({ uri }) => dispatch(takePictureDone({ uri })));
};

export const clearPicture = createAction(Types.CLEAR_PICTURE);
export const savePicture = createAction(Types.SAVE_PICTURE, () => ({ timestamp: Date.now() }));
export const changeCourseTag = createAction(Types.CHANGE_COURSE_TAG, courseTag => ({ courseTag }));
export const changeCaption = createAction(Types.CHANGE_CAPTION, caption => ({ caption }));
