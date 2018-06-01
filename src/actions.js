import mirror from 'mirror-creator';
import { createAction } from 'redux-actions';

export const Types = mirror(['TAKE_PICTURE_STARTED', 'TAKE_PICTURE_DONE', 'TAKE_PICTURE']);

export const takePictureStarted = createAction(Types.TAKE_PICTURE_STARTED);
export const takePictureDone = createAction(Types.TAKE_PICTURE_DONE);

export const takePicture = ({ camera }) => (dispatch) => {
  dispatch(takePictureStarted());

  camera
    .takePictureAsync({ mirrorImage: true })
    .then(({ uri }) => dispatch(takePictureDone({ uri })));
};
