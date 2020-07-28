import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');
const height_logo = height + 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  title: {
    color: '#05375A',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  footer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
