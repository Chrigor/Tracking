import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import Header from '../../components/Header';
import ItemOrder from '../../components/ItemOrder';
import ButtonPlus from '../../components/ButtonPlus';

import PushNotification from '../../utils/sendNotification';

import {Container} from './styles';

const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      setOrders([
        {
          codigo: 'LX002249507BR',
          servico: 'PAC - Encomenda Econômica',
          host: 'tk',
          quantidade: 0,
          eventos: [],
          time: 1.702,
        },
        {
          codigo: 'LX002249507BT',
          servico: 'PAC - Encomenda Econômica',
          host: 'tk',
          quantidade: 0,
          eventos: [],
          time: 1.702,
        },
        {
          codigo: 'LX002249507BA',
          servico: 'PAC - Encomenda Econômica',
          host: 'tk',
          quantidade: 0,
          eventos: [],
          time: 1.702,
        },
      ]);
    };

    getOrders();
  }, []);

  useEffect(() => {
    PushNotification('A caminho!', 'Suas encomendas estão a caminho.');
  }, []);

  const renderItem = ({item}) => {
    return <ItemOrder item={item} />;
  };

  return (
    <Container>
      <Header haveNotifications={true} />

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
