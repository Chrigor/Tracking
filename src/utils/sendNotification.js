import PushNotification from 'react-native-push-notification';

export default function () {
  console.log('TOMA NOTIFICAION');

  PushNotification.createChannel(
    {
      channelId: '1',
      channelName: '1',
      importance: 4,
      vibrate: true,
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );

  PushNotification.localNotification({
    channelId: '1',
    title: 'My Notification Title', // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
    message: 'My Notification Message', // (required)
  });
}
