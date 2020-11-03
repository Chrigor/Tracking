import 'react-native-gesture-handler';
import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import StatusBar from './src/components/StatusBar';

import NotificationsConfigure from './src/config/Notifications';
import sendNotification from './src/utils/sendNotification';

export default function App() {
  useEffect(() => {
    NotificationsConfigure();
    sendNotification();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  );
}
