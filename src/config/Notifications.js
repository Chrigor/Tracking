import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';

export default function () {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    onNotification: function (notification) {
      // on press
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
