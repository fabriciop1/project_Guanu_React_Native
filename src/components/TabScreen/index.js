import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../../pages/Profile';
import MainStackScreen from '../../pages/Main';
import NotificationsScreen from '../../pages/Notifications';
import ConfigScreen from '../../pages/Settings';

const Tab = createMaterialBottomTabNavigator();

const TabScreen = () => (
  <Tab.Navigator initialRouteName="Main" activeColor="#FFF">
    <Tab.Screen
      name="Main"
      component={MainStackScreen}
      options={{
        tabBarLabel: 'Início',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        tabBarLabel: 'Notificações',
        tabBarColor: '#D02860',
        tabBarIcon: ({ color }) => (
          <Icon name="md-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Perfil',
        tabBarColor: '#694FAD',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Config"
      component={ConfigScreen}
      options={{
        tabBarLabel: 'Configurações',
        tabBarColor: '#1F65FF',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabScreen;
