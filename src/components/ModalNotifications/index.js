import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modalbox';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';

import {useSelector} from 'react-redux';

import {
  Container,
  ContainerSwipe,
  ContainerItem,
  ButtonSwipe,
  Title,
  SubTitle,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import brDateToEngDate from '../../utils/convertDate';

let modalRef = null;

const ModalNotifications = (props) => {
  const notifications = useSelector((state) => state.getNotifications.data);

  return (
    <Modal
      ref={(modal) => (modalRef = modal)}
      entry="top"
      coverScreen={true}
      swipeToClose={false}
      swipeThreshold={0}
      swipeArea={0}
      backdropPressToClose={true}
      isOpen={props.isOpen}>
      <Container>
        <FlatList
          keyExtractor={(notification, indice) => indice}
          data={notifications}
          renderItem={({item: notification}) => {
            return (
              <ContainerItem>
                <Title />
                <View>
                  <Title>{notification.nameProduct}</Title>
                  <SubTitle>
                    {' '}
                    {notification.status} no dia {notification.data} ás{' '}
                    {notification.hora}
                  </SubTitle>
                </View>
              </ContainerItem>
            );
          }}
        />
        {notifications.length <= 0 && <Title center>Sem Notificações</Title>}
      </Container>

      <ContainerSwipe>
        <ButtonSwipe
          touchSoundDisabled={true}
          onPressIn={() => modalRef.close()}>
          <Icon name="grip-lines" size={25} />
        </ButtonSwipe>
      </ContainerSwipe>
    </Modal>
  );
};

export default ModalNotifications;
