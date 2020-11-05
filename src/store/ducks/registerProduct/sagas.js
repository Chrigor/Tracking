import {Alert} from 'react-native';
import {call, put, select} from 'redux-saga/effects';

import api from '../../../services/api';

import {loadFailure, loadSuccess} from './actions';

export function* registerProduct({payload}) {
  try {
    console.log('Payload');
    console.log(payload);

    const {data} = yield call(
      api.get,
      `/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${payload.code}`,
    );

    yield put(loadSuccess(data));
    Alert.alert('Sucesso', 'Cadastro realizado');
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Houve um erro ao cadastrar o cliente');
    yield put(loadFailure());
  }
}
