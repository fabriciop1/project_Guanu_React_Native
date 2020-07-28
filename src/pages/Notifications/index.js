import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
      <Button title="NotificationsScreen" onPress={() => alert('clicked')} />
    </View>
  );
};

export default NotificationsScreen;
