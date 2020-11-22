import {all, takeLatest} from 'redux-saga/effects';

import RegisterProductTypes from './registerProduct/types';
import GetNotificationsTypes from './getNotifications/types';

import {registerProduct} from './registerProduct/sagas';
import {getNotifications} from './getNotifications/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RegisterProductTypes.LOAD_REQUEST, registerProduct),
    takeLatest(GetNotificationsTypes.LOAD_REQUEST, getNotifications),
  ]);
}
