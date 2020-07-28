import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0085da', '#78516c', '#525355']}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={2500}
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="center"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Divulgue seus serviços!</Text>
        <Text style={styles.text}>
          Ou contrate um profissional em Garanhuns
        </Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <LinearGradient
              colors={['#0085da', '#525355']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Começar</Text>
              <Icon name="ios-chevron-forward-outline" color="#FFF" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
