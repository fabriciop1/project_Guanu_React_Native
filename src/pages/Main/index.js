import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Button
        title="LoginScreen"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
};

const MainStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#FFF',
        headerTintStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Início',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
