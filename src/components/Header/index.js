/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  ContainerNotification,
  BallNotification,
  Title,
} from './styles';

const HeaderHome = ({haveNotifications = false}) => {
  return (
    <Container>
      <Title>Seja Bem-Vindo!</Title>
      <ContainerNotification
        onPress={() => console.log('Click')}
        activeOpacity={0.7}>
        <Icon name="notifications" size={30} color="#292b2f" />
        {haveNotifications && <BallNotification />}
      </ContainerNotification>
    </Container>
  );
};

export default HeaderHome;
