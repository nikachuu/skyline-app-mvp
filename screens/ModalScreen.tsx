import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AuthDataSource } from '../core/config/data/auth.datasource';
import { AuthParams } from '../models/AuthParams';
import { LocalStorageService } from '../core/config/service/loca.storage.service.impl';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ModalScreen() {
  signIn();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEXTO LOUCO</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            CLICK ME
          </Text>
        </TouchableOpacity>
    </View>
  );
}

async function signIn() {
  const auth = new AuthDataSource();
  const user: AuthParams = {
    email: 'linsantos93@gmail.com',
    password: '123456',
    returnSecureToken: true,
  }
  await auth.signIn(user);
}

async function handleHelpPress() {
  const storage = new LocalStorageService(AsyncStorage);
  console.log(await storage.get('authData'));
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
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
