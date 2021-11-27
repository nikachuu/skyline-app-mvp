import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import {
  DefaultTheme,
  Divider,
  FAB,
  List,
  Portal,
  Title,
} from "react-native-paper";
import { RootStackScreenProps } from "../types";
import ModalScreen from "./ModalScreen";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"EventsList">) {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <View style={styles.container}>
        <Title>Meus eventos</Title>
        <ScrollView>
          <List.Item
            title="Feira"
            description="Av. Interlagos 4455"
            left={(props) => (
              <List.Icon {...props} icon="calendar" style={styles.listIcon} />
            )}
          />
          <Divider />
        </ScrollView>
        <FAB
          style={styles.fab}
          icon="plus"
          color="#fff"
          onPress={() => showModal()}
        />
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  listIcon: { margin: 0 },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
