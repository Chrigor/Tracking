import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadRequest = (code = '') => ({
  type: Types.LOAD_REQUEST,
  payload: {
    code,
  },
});

export const loadSuccess = () => ({
  type: Types.LOAD_SUCCESS,
});

export const loadFailure = () => ({
  type: Types.LOAD_FAILURE,
});
