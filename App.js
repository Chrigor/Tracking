import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';
import StatusBar from './src/components/StatusBar';

import NotificationsConfigure from './src/config/Notifications';
import {setNavigator} from './src/services/navigate';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/store';

console.disableYellowBox = true;

export default function App() {
  useEffect(() => {
    NotificationsConfigure();
  }, []);

  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <NavigationContainer ref={setNavigator}>
          <StatusBar />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
