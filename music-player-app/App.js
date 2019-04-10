import React from "react";
import { Text } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";
import MainScreen from "./components/MainScreen";
import PlayerScreen from "./components/PlayerScreen";
import EmptyComponent from "./components/EmptyComponent";

const TabIcon = ({ title }) => {
  return <Text style={{ fontSize: 20 }}>{title}</Text>;
};
class PlaylistItem {
  constructor(name, uri, image) {
    this.name = name;
    this.uri = uri;
    this.image = image;
  }
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: [
        new PlaylistItem(
          "Comfort Fit - “Sorry”",
          "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3",
          "http://www.sclance.com/pngs/vinyl-records-png/vinyl_records_png_1469170.jpg"
        ),
        new PlaylistItem(
          "Mildred Bailey – “All Of Me”",
          "https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3",
          "http://www.sclance.com/pngs/vinyl-records-png/vinyl_records_png_1468942.png"
        ),
        new PlaylistItem(
          "Podington Bear - “Rubber Robot”",
          "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3",
          "http://www.sclance.com/pngs/vinyl-records-png/vinyl_records_png_1469228.jpg"
        ),
        new PlaylistItem(
          'Feather Duster- "Geographer"',
          "https://a.uguu.se/W85gJqmRhaCV_Feather_Duster.mp3",
          "http://www.sclance.com/pngs/vinyl-records-png/vinyl_records_png_1469170.jpg"
        ),
        new PlaylistItem(
          'Anxious- "Anxious"',
          "https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3",
          "http://www.sclance.com/pngs/vinyl-records-png/vinyl_records_png_1469170.jpg"
        ),
        new PlaylistItem(
          "Track - “Song”",
          "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3",
          "http://www.sclance.com/pngs/vinyl-records-png/vinyl_records_png_1468942.png"
        )
      ]
    };
  }
  render() {
    const { playList } = this.state;
    // Actions.refresh({key: "player", title});
    return (
      <Router>
        <Stack key="root">
          {/* Tab Container */}
          <Scene
            key="tabbar"
            tabs={true}
            hideNavBar={true}
            tabBarStyle={{ backgroundColor: "#FFFFFF" }}
            labelStyle={{ display: "none" }}
            activeBackgroundColor="#56D5FA"
          >
            {/* Main tab*/}
            <Scene key="one" title="1" icon={TabIcon}>
              <Scene
                key="main"
                playList={playList}
                component={MainScreen}
                title="Title"
              />
              <Scene
                key="player"
                component={PlayerScreen}
                playList={playList}
              />
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
        </Stack>
      </Router>
    );
  }
}
