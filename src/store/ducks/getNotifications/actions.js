import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadRequest = () => ({
  type: Types.LOAD_REQUEST,
});

export const loadSuccess = (notifications) => ({
  type: Types.LOAD_SUCCESS,
  payload: notifications,
});

export const loadFailure = () => ({
  type: Types.LOAD_FAILURE,
});
