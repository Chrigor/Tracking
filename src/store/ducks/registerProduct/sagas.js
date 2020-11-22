import {Alert} from 'react-native';
import {call, put, select} from 'redux-saga/effects';

import api from '../../../services/api';

import {loadFailure, loadSuccess} from './actions';
import {loadRequest} from '../getNotifications/actions';

import {navigate} from '../../../services/navigate';

export function* registerProduct({payload}) {
  try {
    const {data} = yield call(
      api.get,
      `/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${payload.code}`,
    );

    yield put(loadSuccess({...data, ...payload}));
    Alert.alert('Sucesso', 'Objeto adicionado');
    yield put(loadRequest());

    navigate('Home');
  } catch (err) {
    Alert.alert('Falha', 'Houve um erro ao tentar adicionar objeto');
    yield put(loadFailure());
  }
}
