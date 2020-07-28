import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const LoginScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    passwd: '',
    emailInputChanged: false,
    passwdEntrySecured: true,
  });

  const emailInputChange = (value) => {
    // email validation here
    if (value.length !== 0) {
      setData({ ...data, email: value, emailInputChanged: true });
    } else {
      setData({ ...data, email: value, emailInputChanged: false });
    }
  };

  const passwdInputChange = (value) => {
    setData({ ...data, password: value });
  };

  const securePasswdEntry = () => {
    setData({ ...data, passwdEntrySecured: !data.passwdEntrySecured });
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={['#0085DA', '#78516C', '#525355']}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Bem-vindo!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375A" size={20} />
          <TextInput
            placeholder="Digite seu email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => emailInputChange(value)}
          />
          {data.emailInputChanged ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="blue" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={styles.text_footer}>Senha</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375A" size={20} />
          <TextInput
            secureTextEntry={data.passwdEntrySecured ? true : false}
            placeholder="Digite sua senha"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => passwdInputChange(value)}
          />
          <TouchableOpacity onPress={() => securePasswdEntry()}>
            {data.passwdEntrySecured ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <LinearGradient style={styles.signIn} colors={['#0085DA', '#525355']}>
            <Text style={styles.textSignIn}>Entrar</Text>
          </LinearGradient>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textSignUp}>Inscreva-se</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default LoginScreen;
