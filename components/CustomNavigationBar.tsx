import * as React from "react";
import { useState } from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Appbar, Menu } from "react-native-paper";

export function CustomNavigationBar({ navigation }: NativeStackHeaderProps) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Appbar.Header dark>
      {navigation.canGoBack() ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title="Skyline" />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" color="white" onPress={openMenu} />}
      >
        <Menu.Item
          onPress={() => {
            console.log("Option 1 was pressed");
          }}
          title="Option 1"
        />
        <Menu.Item
          onPress={() => {
            console.log("Option 2 was pressed");
          }}
          title="Option 2"
        />
        <Menu.Item
          onPress={() => {
            console.log("Option 3 was pressed");
          }}
          title="Option 3"
          disabled
        />
      </Menu>
    </Appbar.Header>
  );
}
