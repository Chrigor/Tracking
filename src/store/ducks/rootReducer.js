import {combineReducers} from 'redux';

import registerProduct from './registerProduct';

const appReducer = combineReducers({
  registerProduct,
});

export default appReducer;
