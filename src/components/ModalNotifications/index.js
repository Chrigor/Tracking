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
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import brDateToEngDate from '../../utils/convertDate';

let modalRef = null;

const ModalNotifications = (props) => {
  const orders = useSelector((state) => state.registerProduct.data);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    orders.forEach((elemento) => {
      elemento.eventos.forEach((eventos) => {
        eventos.codigo = elemento.codigo;
      });
    });

    const notificationsNew = orders.map((elemento) => elemento.eventos).flat(1);

    console.log('Notifications');
    console.log(notificationsNew);

    setNotifications(notificationsNew);
  }, []);

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
            // console.log('ITEM');
            // console.log(notification);
            return (
              <ContainerItem>
                <Title>{notification.codigo}</Title>
                <View>
                  <Title>{notification.status}</Title>
                  <Title>{notification.data}</Title>
                </View>
              </ContainerItem>
            );
          }}
        />
        {notifications.length <= 0 && <Text>Sem Notificações</Text>}
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
