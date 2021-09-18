import * as React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { Card, TextInput, Button, Paragraph } from "react-native-paper";

import { RootStackScreenProps } from "../types";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Card style={styles.card}>
        <Card.Title title="Entre na sua conta" />
        <Card.Content>
          <TextInput mode="outlined" label="E-mail" />
          <TextInput mode="outlined" label="Senha" />
          <TouchableOpacity
            onPress={() => navigation.replace("Root")}
            style={styles.link}
          >
            <Text style={styles.linkText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </Card.Content>
        <Card.Actions style={styles.actionsContainer}>
          <Button mode="contained" color="#A7D86D" dark style={styles.button}>
            Entrar
          </Button>
          <Paragraph>
            Não tem uma conta?{" "}
            <TouchableOpacity onPress={() => navigation.replace("Register")}>
              <Text style={[styles.linkText, styles.registerLinkText]}>
                Registre-se
              </Text>
            </TouchableOpacity>
          </Paragraph>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 204,
    height: 83,
    margin: 30,
  },
  card: {
    width: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    paddingTop: 10,
  },
  linkText: {
    fontSize: 14,
    color: "#507A1E",
  },
  registerLinkText: {
    paddingTop: 5,
  },
  actionsContainer: {
    flexDirection: "column",
    marginVertical: 15,
  },
  button: {
    paddingVertical: 2,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
});
