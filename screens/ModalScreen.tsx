import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Api from '../constants/Api';
import { AuthDataSource } from '../core/config/data/auth.datasource';
import { AuthParams } from '../models/AuthParams';

export default function ModalScreen() {
  doSignUp();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEXTO LOUCO</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

async function doSignUp() {
  const auth = new AuthDataSource();
  const user: AuthParams = {
    email: 'linsantos93@gmail.com',
    password: '123456',
    returnSecureToken: false,
  }
  await auth.siginUp(user);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
