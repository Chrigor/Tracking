import {all, takeLatest} from 'redux-saga/effects';

import RegisterProductTypes from './registerProduct/types';

import {registerProduct} from './registerProduct/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RegisterProductTypes.LOAD_REQUEST, registerProduct),
  ]);
}
