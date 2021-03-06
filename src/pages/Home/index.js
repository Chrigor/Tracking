import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import Header from '../../components/Header';
import ItemOrder from '../../components/ItemOrder';
import ButtonPlus from '../../components/ButtonPlus';

import PushNotification from '../../utils/sendNotification';
import {loadRequest} from '../../store/ducks/getNotifications/actions';

import {useSelector, useDispatch} from 'react-redux';
import Loading from '../../components/Loading';

import {Container} from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.registerProduct.data);
  const loading = useSelector((state) => state.registerProduct.loading);

  console.log(orders);

  useEffect(() => {
    PushNotification('A caminho!', 'Suas encomendas estão a caminho.');
  }, []);

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  const renderItem = ({item}) => {
    return <ItemOrder item={item} />;
  };

  return (
    <Container>
      <Header haveNotifications={true} />

      {loading && <Loading />}

      <FlatList
        data={orders}
        keyExtractor={(item) => item.codigo}
        renderItem={renderItem}
      />

      <ButtonPlus />
    </Container>
  );
};

export default Home;
