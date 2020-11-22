import {combineReducers} from 'redux';

import registerProduct from './registerProduct';
import getNotifications from './getNotifications';

const appReducer = combineReducers({
  registerProduct,
  getNotifications,
});

export default appReducer;
