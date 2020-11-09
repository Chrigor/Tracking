import React, {useEffect} from 'react';
import {View} from 'react-native';

// import { Container } from './styles';

const DetailsProduct = ({route}) => {
  useEffect(() => {
    const item = route.params;
    // console.log('ITEM');
    // console.log(item);
  }, []);

  return <View />;
};

export default DetailsProduct;
