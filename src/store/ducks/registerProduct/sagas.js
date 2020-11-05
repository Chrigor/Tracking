import {Alert} from 'react-native';
import {call, put, select} from 'redux-saga/effects';

import {api} from '../../../services/api';

import {loadFailure, loadSuccess} from './actions';

export function* registerProduct({payload}) {
  try {
    console.log('Payload');
    console.log(payload);

    yield put(loadSuccess());
    Alert.alert('Sucesso', 'Cadastro realizado');
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Houve um erro ao cadastrar o cliente');
    yield put(loadFailure());
  }
}
