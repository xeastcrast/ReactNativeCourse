/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  Switch,
  ScrollView,
  TouchableNativeFeedback
} from "react-native";
import { useInput } from "./src/hooks/input";
import { isObjectMethod } from "@babel/types";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default function App() {
  const username = useInput();
  return (
    <View style={styles.container}>
      {/* <SafeAreaView > */}
      {/* TODO Make it be component */}
      <Text>Username: {username.getValue()}</Text>
      <TextInput value={username.getValue()} {...username.events} />
      <Switch />
      <ScrollView style={styles.scrollView}>
        <TouchableNativeFeedback
          onPress={() => {
            // alert('Clicked')
          }}
        >
          <View style={styles.touchable}>
            <Text>Click me!!!!</Text>
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: 100
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  flatList: {
    height: 200,
    backgroundColor: "green"
  },
  listItem: {
    backgroundColor: "#444"
  },
  listText: {
    color: "white"
  },
  touchable: {
    width: 100,
    height: 50,
    flex: 1
  }
});
