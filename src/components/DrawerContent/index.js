import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import styles from './styles';

export function DrawerContent(props) {
  const [isDarkTheme, setDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={styles.wrapperText}>
              <Avatar.Image
                source={{
                  uri:
                    'https://img.utdstc.com/icons/who-viewed-my-facebook-profile-android.png:75',
                }}
                size={50}
              />
              <View style={styles.textWrapperLeft}>
                <Title style={styles.title}>Fabricio Paes</Title>
                <Caption style={styles.caption}>
                  fabriciopaes1@gmail.com
                </Caption>
              </View>
            </View>
            <Drawer.Section style={styles.drawerSection}>
              <Drawer.Item
                label="Início"
                icon={({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                )}
                onPress={() => {
                  props.navigation.navigate('Main');
                }}
              />
              <Drawer.Item
                label="Perfil"
                icon={({ color, size }) => (
                  <Icon name="ios-person" color={color} size={size} />
                )}
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
              />
              <Drawer.Item
                label="Favoritos"
                icon={({ color, size }) => (
                  <Icon name="md-heart-outline" color={color} size={size} />
                )}
                onPress={() => {}}
              />
              <Drawer.Item
                label="Sobre"
                icon={({ color, size }) => (
                  <Icon
                    name="information-circle-outline"
                    color={color}
                    size={size}
                  />
                )}
                onPress={() => {}}
              />
            </Drawer.Section>
            <Drawer.Section title="Preferências">
              <TouchableRipple
                onPress={() => {
                  toggleTheme();
                }}>
                <View style={styles.preference}>
                  <Text>Tema Escuro</Text>
                  <View pointerEvents="none">
                    <Switch value={isDarkTheme} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSetion}>
        <DrawerItem
          label="Sair"
          icon={({ color, size }) => (
            <Icon name="log-out" color={color} size={size} />
          )}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}
