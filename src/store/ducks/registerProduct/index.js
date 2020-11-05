const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

import RegisterProductTypes from './types';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterProductTypes.LOAD_REQUEST:
      return {...state, loading: true, error: false};

    case RegisterProductTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case RegisterProductTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
