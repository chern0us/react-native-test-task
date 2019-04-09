import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        This is player
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default PlayerScreen;