import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadRequest = (code = '') => ({
  type: Types.LOAD_REQUEST,
  payload: {
    code,
  },
});

export const loadSuccess = (object) => ({
  type: Types.LOAD_SUCCESS,
  payload: object,
});

export const loadFailure = () => ({
  type: Types.LOAD_FAILURE,
});
