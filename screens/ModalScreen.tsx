import { Formik } from "formik";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Provider,
  Modal,
  Title,
  TextInput,
  HelperText,
} from "react-native-paper";

import { theme } from "../utils/Theme";

interface ModalScreenProps {
  visible: boolean;
  onDismiss: () => void;
}

export default function ModalScreen({ visible, onDismiss }: ModalScreenProps) {
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };

  return (
    <Provider theme={theme}>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={containerStyle}
      >
        <Title>Novo evento</Title>
        <Formik
          initialValues={{
            title: "",
            address: "",
            startingDate: "",
            finishingDate: "",
            startingTime: "",
            finishingTime: "",
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
            <>
              <View style={styles.inputContainer}>
                <TextInput
                  mode="outlined"
                  label="Título"
                  value={values.title}
                  onChangeText={handleChange("title")}
                  onBlur={handleBlur("title")}
                  error={errors.title !== undefined && touched.title}
                />
                {errors.title && touched.title && (
                  <HelperText type="error"> {errors.title} </HelperText>
                )}
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  mode="outlined"
                  label="Local"
                  value={values.address}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.address !== undefined && touched.address}
                />
                {errors.address && touched.address && (
                  <HelperText type="error"> {errors.address} </HelperText>
                )}
              </View>
              <View style={styles.twoInputsContainer}>
                <TextInput
                  style={styles.smallerInput}
                  mode="outlined"
                  label="Dt início"
                  value={values.startingDate}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={
                    errors.startingDate !== undefined && touched.startingDate
                  }
                />
                {errors.startingDate && touched.startingDate && (
                  <HelperText type="error"> {errors.startingDate} </HelperText>
                )}

                <TextInput
                  style={styles.smallerInput}
                  mode="outlined"
                  label="Dt término"
                  value={values.finishingDate}
                  onChangeText={handleChange("finishingDate")}
                  onBlur={handleBlur("finishingDate")}
                  error={
                    errors.finishingDate !== undefined && touched.finishingDate
                  }
                />
                {errors.finishingDate && touched.finishingDate && (
                  <HelperText type="error">{errors.finishingDate}</HelperText>
                )}
              </View>
              <View style={styles.twoInputsContainer}>
                <TextInput
                  style={styles.smallerInput}
                  mode="outlined"
                  label="Hora início"
                  value={values.startingTime}
                  onChangeText={handleChange("startingTime")}
                  onBlur={handleBlur("startingTime")}
                  error={
                    errors.startingTime !== undefined && touched.startingTime
                  }
                />
                {errors.startingTime && touched.startingTime && (
                  <HelperText type="error"> {errors.startingTime} </HelperText>
                )}

                <TextInput
                  style={styles.smallerInput}
                  mode="outlined"
                  label="Hora término"
                  value={values.finishingTime}
                  onChangeText={handleChange("finishingTime")}
                  onBlur={handleBlur("finishingTime")}
                  error={
                    errors.finishingTime !== undefined && touched.finishingTime
                  }
                />
                {errors.finishingTime && touched.finishingTime && (
                  <HelperText type="error">{errors.finishingTime}</HelperText>
                )}
              </View>
              <Button
                style={styles.button}
                mode="contained"
                color="#A7D86D"
                dark
                onPress={() => console.log(values)}
                disabled={!dirty || !isValid}
              >
                Cadastrar
              </Button>
            </>
          )}
        </Formik>
      </Modal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: { marginVertical: 10 },
  twoInputsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  smallerInput: {
    width: "49%",
  },
  button: {
    marginTop: 50,
  },
});
