import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const ConfigScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Config Screen</Text>
      <Button title="ConfigScreen" onPress={() => alert('clicked')} />
    </View>
  );
};

export default ConfigScreen;
