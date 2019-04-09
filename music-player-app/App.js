import React, { Component } from "react";
import { Text } from "react-native";
import { Router, Scene } from "react-native-router-flux";

// New Imports

import MainScreen from "./components/MainScreen";
import PlayerScreen from "./components/PlayerScreen";
import EmptyComponent from "./components/EmptyComponent";
// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            hideNavBar={true}
            tabBarStyle={{ backgroundColor: "#FFFFFF" }}
          >
            {/* Main tab*/}
            <Scene key="one" title="1" icon={TabIcon}>
              <Scene key="main" component={MainScreen} title="Title" />
              <Scene key="player" component={PlayerScreen} title="Song" />
            </Scene>

            {/* Empty scene*/}
            <Scene key="two" title="2" icon={TabIcon}>
              <Scene key="empty" component={EmptyComponent} title="Title" />
            </Scene>

            {/* Empty scene*/}
            <Scene key="three" title="3" icon={TabIcon}>
              <Scene key="empty" component={EmptyComponent} title="Title" />
            </Scene>
            {/* Empty scene*/}
            <Scene key="four" title="4" icon={TabIcon}>
              <Scene key="empty" component={EmptyComponent} title="Title" />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}
