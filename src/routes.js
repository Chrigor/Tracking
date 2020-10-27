import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/pages/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
} 

export default MyStack;
