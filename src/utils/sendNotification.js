import PushNotification from 'react-native-push-notification';

export default function (title = 'Default', message = 'Message default') {
  console.log('TOMA NOTIFICAION');

  PushNotification.createChannel(
    {
      channelId: '1',
      channelName: '1',
      importance: 2,
      vibrate: true,
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );

  PushNotification.localNotification({
    channelId: '1',
    title,
    message,
  });
}
