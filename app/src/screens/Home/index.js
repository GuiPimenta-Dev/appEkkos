import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import { StyleSheet } from "react-native";
import AudioSlider from "./AudioSlider";
import AudioFile from "../../assets/counting.m4a";
import Avatar from "../../components/Avatar";
import StatisticsPost from "../../components/StatisticsPost";

const PostsJSON = [
  {
    id: "2",
    source: AudioFile,
    user: "derek.russel",
    avatar: require("../../assets/avatars/derek.russel.png"),
  },
  {
    id: "4",
    source: AudioFile,
    user: "jmitch",
    avatar: require("../../assets/avatars/jmitch.png"),
  },
  {
    id: "5",
    source: AudioFile,
    user: "monicaa",
    avatar: require("../../assets/avatars/monicaa.png"),
  },
  {
    id: "3",
    source: AudioFile,
    user: "alexandergarcia",
    avatar: require("../../assets/avatars/alexandergarcia.png"),
  },
  {
    id: "1",
    source: AudioFile,
    user: "andrea.schmidt",
    avatar: require("../../assets/avatars/andrea.schmidt.png"),
  },
];

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor="gray" />
      <FlatList
        data={PostsJSON}
        renderItem={({ item, index }) => (
          <ListedAudio {...{ item, index }} key={index.toString()} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  ); 
}

function ListedAudio({ item }) {
  let { user, id, source, avatar } = item;

  return (
    <View
      style={[
        styles.StandardContainer,
        {
          padding: 3,
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: 4,
          marginBottom: 2,
        },
      ]}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{ flex: 0, backgroundColor: "#fff", justifyContent: "center" }}
        >
          <Avatar {...{ user, avatar, id }} />
        </View>
        <View
          style={{
            flex: 0,
            flexDirection: "row",
            // justifyContent: "space-between",
            // alignItems: "center"
          }}
        >
          {/* <Text style={{ flex: 5, color: "gray", paddingHorizontal: 6 }}>{user}</Text> */}
          {/* <TouchableOpacity style={[{ flex: 1 }]}>
          <Text style={styles.StandardText}>Edit</Text>
        </TouchableOpacity> */}
        </View>
        <View style={{ flex: 1, paddingTop: 7 }}>
          <AudioSlider audio={source} />
        </View>
      </View>
      {/* <View
        style={{
          // height: 3,
          // backgroundColor: "lightgray",
          // paddingHorizontal: 10,
          width: "90%",
          borderBottomColor: 'lightgray',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      /> */}
      <View style={{flex: 1,marginTop: 5}} >
        <StatisticsPost />
      </View>
    </View>
  );
}

const standardsStylesObject = {
  backgroundColor: "white",
  borderColor: "grey",
  color: "black",
  borderRadius: 5,
  borderWidth: 0.5,
  fontSizeNormal: 17,
};

const styles = StyleSheet.create({
  StandardText: {
    fontSize: standardsStylesObject.fontSizeNormal,
    padding: 6,
    color: standardsStylesObject.color,
  },
  StandardContainer: {
    borderRadius: standardsStylesObject.borderRadius,
    borderWidth: standardsStylesObject.borderWidth,
    borderColor: standardsStylesObject.borderColor,
    backgroundColor: standardsStylesObject.backgroundColor,
    marginLeft: 7,
    marginRight: 7,
  },
});
