import { Formik } from "formik";
import * as React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import {
  Card,
  TextInput,
  HelperText,
  Button,
  Paragraph,
} from "react-native-paper";

import { loginValidationSchema } from "../utils/FormValidations";

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
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          dirty,
          isValid,
        }) => (
          <Card style={styles.card}>
            <Card.Title title="Entre na sua conta" />
            <Card.Content>
              <View style={styles.textInputContainer}>
                <TextInput
                  mode="outlined"
                  autoCompleteType="email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  label="E-mail"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email !== undefined && touched.email}
                />
                {errors.email && touched.email && (
                  <HelperText type="error"> {errors.email} </HelperText>
                )}
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  mode="outlined"
                  secureTextEntry
                  label="Senha"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password !== undefined && touched.password}
                />
                {errors.password && touched.password && (
                  <HelperText type="error"> {errors.password} </HelperText>
                )}
              </View>

              <TouchableOpacity onPress={() => navigation.replace("Root")}>
                <Text style={styles.linkText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </Card.Content>
            <Card.Actions style={styles.actionsContainer}>
              <Button
                mode="contained"
                color="#A7D86D"
                dark
                style={styles.button}
                onPress={handleSubmit}
                disabled={!dirty || !isValid}
              >
                Entrar
              </Button>
              <Paragraph>
                Não tem uma conta?{" "}
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={[styles.linkText, styles.registerLinkText]}>
                    Registre-se
                  </Text>
                </TouchableOpacity>
              </Paragraph>
            </Card.Actions>
          </Card>
        )}
      </Formik>
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
  textInputContainer: {
    height: 85,
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
  helperText: {
    marginBottom: 50,
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
