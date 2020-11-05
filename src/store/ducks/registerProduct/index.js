import RegisterProductTypes from './types';
import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterProductTypes.LOAD_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = false;
      });

    case RegisterProductTypes.LOAD_SUCCESS:
      return produce(state, (draft) => {
        const {payload} = action;
        draft.data.push(payload);

        draft.loading = false;
        draft.error = false;
      });

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
