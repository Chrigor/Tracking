// import {
//   AUTH_CONSUMER_KEY_POST,
//   AUTH_TOKEN_POST,
//   AUTH_CONSUMER_SECRET_KEY_POST,
//   AUTH_TOKEN_SECRET_POST,
//   DS_START_PROCESS_CUSTOMER,
// } from 'react-native-dotenv';
// import { Alert } from 'react-native';
// import { call, put, select } from 'redux-saga/effects';

// import { api } from '../../../services/api';
// import { ApplicationState } from '../..';
// import { loadSuccess, loadFailure } from './actions';
// import { IUserData } from '../login/types';
// import auth from '../../../services/auth';
// import { navigate } from '../../../services/navigation';

// export function* registerProduct({ payload: { customer } }: any) {
//   try {
//     const { data: userData }: { data: IUserData } = yield select(
//       (state: ApplicationState) => state.login,
//     );

//     const headers = yield call(
//       auth,
//       'api/public/ecm/dataset/datasets',
//       AUTH_CONSUMER_KEY_POST,
//       AUTH_CONSUMER_SECRET_KEY_POST,
//       AUTH_TOKEN_POST,
//       AUTH_TOKEN_SECRET_POST,
//       'POST',
//     );

//     customer = {
//       ...customer,
//       matricula: userData.colleagueId,
//     };

//     const params = {
//       name: DS_START_PROCESS_CUSTOMER,
//       constraints: [
//         {
//           _field: 'objeto',
//           _initialValue: JSON.stringify(customer),
//           _finalValue: JSON.stringify(customer),
//           _type: 1,
//         },
//       ],
//     };

//     const { data }: any = yield call(
//       api.post,
//       'api/public/ecm/dataset/datasets',
//       params,
//       headers,
//     );

//     if (data.content.values[0].RETORNO !== '1') {
//       throw new Error();
//     }

//     yield put(loadSuccess());

//     navigate('CustomersList');

//     Alert.alert('Sucesso', 'Cadastro realizado');
//   } catch (err) {
//     Alert.alert('Falha no cadastro', 'Houve um erro ao cadastrar o cliente');

//     yield put(loadFailure());
//   }
// }
