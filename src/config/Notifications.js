import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';

export default function () {
  console.log('Configurou');

  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
    },

    requestPermissions: Platform.OS == 'ios',

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,
  });
}
