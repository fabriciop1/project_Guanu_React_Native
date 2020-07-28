import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375A',
    fontSize: 18,
    marginBottom: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -15,
    paddingLeft: 10,
    color: '#05375A',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signUp: {
    borderColor: '#05375A',
    borderWidth: 1,
    marginTop: 15,
    alignItems: 'center',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  textSignIn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  textSignUp: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#05375A',
  },
});

export default styles;
