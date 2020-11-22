import {Alert} from 'react-native';
import {put, select} from 'redux-saga/effects';

import {loadFailure, loadSuccess} from './actions';

export function* getNotifications() {
  try {
    const orders = yield select((state) => state.registerProduct.data);

    orders.forEach((elemento) => {
      elemento.eventos?.forEach((eventos) => {
        eventos.codigo = elemento.codigo;
        eventos.nameProduct = elemento.name;
      });
    });

    const notificationsNew = orders.map((elemento) => elemento.eventos).flat(1);

    console.log('Notifications');
    console.log(notificationsNew);

    yield put(loadSuccess(notificationsNew));
    // Alert.alert('Sucesso', 'Objeto adicionado');
  } catch (err) {
    Alert.alert('Falha', 'Houve um ao obter notificações');
    yield put(loadFailure());
  }
}
