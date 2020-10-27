import React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';

import { Container } from './styles';

const Home = () => {
  return <Container>
    <Header />
    <Text>Hello world</Text>
  </Container>;
};

export default Home;
