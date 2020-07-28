import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabScreen from './components/TabScreen';
import ProfileScreen from './pages/Profile';
import { DrawerContent } from './components/DrawerContent';
import MainStackScreen from './pages/Main';

import RootStackScreen from './components/RootStack';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={MainStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
