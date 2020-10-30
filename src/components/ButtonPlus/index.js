import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Container, Button} from './styles';
import {useNavigation} from '@react-navigation/native';

const ButtonPlus = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <Icon name="plus" size={44} color="#FFF" />
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default ButtonPlus;
