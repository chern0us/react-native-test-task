import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress={() => Actions.player()}>
        This is the song name
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default MainScreen;
