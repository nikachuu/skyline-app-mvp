import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Appbar, Button, Card, Portal } from "react-native-paper";
import { RootStackScreenProps } from "../types";
import ModalScreen from "./ModalScreen";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Button
            mode="contained"
            color="#A7D86D"
            dark
            onPress={() => navigation.navigate("EventsList")}
          >
            Meus Eventos
          </Button>
          <Button
            mode="contained"
            color="#A7D86D"
            dark
            onPress={() => showModal()}
          >
            Novo Evento
          </Button>
        </View>

        <View style={styles.mapContainer}>
          <Card>
            <Card.Title title="Eventos próximos" />
            <Card.Content>
              <Text>GoogleMaps aqui</Text>
            </Card.Content>
          </Card>
        </View>
      </View>

      <Portal>
        <ModalScreen visible={visible} onDismiss={hideModal} />
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
  mapContainer: {
    flex: 4,
    width: "100%",
  },
});
