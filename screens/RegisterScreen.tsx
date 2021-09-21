import { Formik } from "formik";
import * as React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import {
  Card,
  TextInput,
  Button,
  Paragraph,
  HelperText,
} from "react-native-paper";

import { RootStackScreenProps } from "../types";
import { registerValidationSchema } from "../utils/FormValidations";

export default function RegisterScreen({
  navigation,
}: RootStackScreenProps<"Register">) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
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
            <Card.Title title="Cadastre-se" />
            <Card.Content>
              <View style={styles.textInputContainer}>
                <TextInput
                  mode="outlined"
                  label="Nome"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  error={errors.name !== undefined && touched.name}
                />
                {errors.name && touched.name && (
                  <HelperText type="error"> {errors.name} </HelperText>
                )}
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  textContentType="emailAddress"
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
                  secureTextEntry
                  mode="outlined"
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
              <View style={styles.textInputContainer}>
                <TextInput
                  secureTextEntry
                  mode="outlined"
                  label="Confirmar senha"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  error={
                    errors.confirmPassword !== undefined &&
                    touched.confirmPassword
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <HelperText type="error">{errors.confirmPassword}</HelperText>
                )}
              </View>
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
                Cadastrar
              </Button>
              <Paragraph>
                Já possui uma conta?{" "}
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={[styles.linkText, styles.registerLinkText]}>
                    Faça o login
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
