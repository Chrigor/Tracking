import React from 'react';
import Modal from 'react-native-modalbox';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';

import {Container, ContainerSwipe, ButtonSwipe} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

let modalRef = null;

const ModalNotifications = (props) => {
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
      <Container />
      {/* {true && (
        <View style={styles.modalContainer}>
          <FlatList
            contentContainerStyle={styles.flatList}
            keyExtractor={(notification) => notification.value[1]}
            data={sortNotificationsByDate(props.notifications)}
            renderItem={({item: notification}) => (
              <TouchableWithoutFeedback
                onPress={() => handleDeleteNotification(notification.value[1])}>
                <View style={styles.notificationContainer}>
                  {decideImage(notification.value[9])}
                  <View>
                    <Text>{notification.value[4]}</Text>
                    <Text>{notification.value[9]}</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      )} */}

      <ContainerSwipe>
        <ButtonSwipe
          touchSoundDisabled={true}
          onPressIn={() => modalRef.close()}>
          <Icon name="grip-lines" size={20} />
        </ButtonSwipe>
      </ContainerSwipe>
    </Modal>
  );
};

export default ModalNotifications;
