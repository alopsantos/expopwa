import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Main from './pages/Main';
import Camera from './pages/Camera';
import Plantao from './pages/Plantao';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Plantão" options={{ tabBarIcon: ({color}) => <Feather name="home" size={20} color={color} /> }} component={Plantao} />
        <Tab.Screen name="Farmacias" options={{ tabBarIcon: ({color}) => <Feather name="home" size={20} color={color} /> }} component={Main} />
        <Tab.Screen name="Camera" options={{ tabBarIcon: ({color}) => <Feather name="camera" size={20} color={color} /> }} component={Camera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
