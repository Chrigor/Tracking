import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/pages/Home';
import AddProduct from '../src/pages/AddProduct';
import DetailsProduct from '../src/pages/DetailsProduct';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{headerShown: true, title: 'Adicionar Objeto'}}
      />
      <Stack.Screen
        name="DetailsProduct"
        component={DetailsProduct}
        options={{headerShown: true, title: 'Detalhes do Rastreio'}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
