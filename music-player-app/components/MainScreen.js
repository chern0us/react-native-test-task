import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";
import { Actions } from "react-native-router-flux";
import { Audio } from 'expo';

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.trackList}
          data={this.props.playList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableHighlight
                style={styles.trackListItem}
                onPress={() => {
                  Actions.player({index,  title: item.name});
                }}
                underlayColor="#56D5FA"
              >
                <Text key={item.id} style={styles.trackListItemText}>{item.name}</Text>
              </TouchableHighlight>
            );
          }}
        />
      </View>
    );
  }
}

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
  },
  trackList: {
    width: "100%"
  },
  trackListItem: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 15,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  trackListItemText: {
    color: "black",
    fontSize: 16
  }
});
