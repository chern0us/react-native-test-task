import React from "react";
import { StyleSheet, Text, View } from "react-native";
const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        There's nothing yet
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

export default EmptyComponent;
