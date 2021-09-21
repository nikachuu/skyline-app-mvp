import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Appbar, Button, Card } from "react-native-paper";
import { RootStackScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Button mode="contained" color="#A7D86D" dark>
            Meus Eventos
          </Button>
          <Button mode="contained" color="#A7D86D" dark>
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
