import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../pages/Welcome';
import LoginScreen from '../../pages/Login';
import RegisterScreen from '../../pages/Register';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Welcome" component={WelcomeScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="Register" component={RegisterScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
