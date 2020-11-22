import GetNotificationsTypes from './types';
import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GetNotificationsTypes.LOAD_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = false;
      });

    case GetNotificationsTypes.LOAD_SUCCESS:
      return produce(state, (draft) => {
        const {payload} = action;
        draft.data = payload;
      });

    case GetNotificationsTypes.LOAD_FAILURE:
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
