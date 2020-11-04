/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  ContainerNotification,
  BallNotification,
  Title,
} from './styles';

import ModalNotifications from '../../components/ModalNotifications';

const HeaderHome = ({haveNotifications = false}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <Title>Seja Bem-Vindo!</Title>
      <ContainerNotification
        onPress={() => setModalVisible(!modalVisible)}
        activeOpacity={0.7}>
        <Icon name="notifications" size={30} color="#292b2f" />
        {haveNotifications && <BallNotification />}

      <ModalNotifications isOpen={modalVisible}/>
      </ContainerNotification>

    </Container>
  );
};

export default HeaderHome;
