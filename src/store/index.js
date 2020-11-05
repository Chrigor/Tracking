import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(sagaMiddleware),
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default {store, persistor};
