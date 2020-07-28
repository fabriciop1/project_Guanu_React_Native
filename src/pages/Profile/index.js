import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="ProfileScreen" onPress={() => alert('clicked')} />
    </View>
  );
};

export default ProfileScreen;
