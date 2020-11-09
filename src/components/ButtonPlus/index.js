import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {Container, Button} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {loadRequest} from '../../store/ducks/registerProduct/actions';

const ButtonPlus = () => {
  const navigation = useNavigation();
  const todoEstado = useSelector((state) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('ESTADO');
  //   console.log(todoEstado);
  // }, [todoEstado]);

  return (
    <>
      <Container>
        <TouchableOpacity
          onPress={() => {
            // dispatch(loadRequest('LB894348160SE'));
            navigation.navigate('AddProduct');
          }}>
          <Icon name="plus" size={44} color="#FFF" />
        </TouchableOpacity>
      </Container>
    </>
  );
};

export default ButtonPlus;
