import React, { useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  StatusBar,
  Button,
} from "react-native";
import Posts from "../../components/Post";

import { useSelector } from "react-redux";

// const PostsJSON = useSelector((state) => state.data);
// console.log(PostsJSON);

// const PostsJSON = [
//   {
//     id: '2',
//     source: require('../../assets/stories/2.jpg'),
//     user: 'derek.russel',
//     avatar: require('../../assets/avatars/derek.russel.png'),
//   },
//   {
//     id: '4',
//     source: require('../../assets/stories/4.jpg'),
//     user: 'jmitch',
//     avatar: require('../../assets/avatars/jmitch.png'),
//   },
//   {
//     id: '5',
//     source: require('../../assets/stories/5.jpg'),
//     user: 'monicaa',
//     avatar: require('../../assets/avatars/monicaa.png'),
//   },
//   {
//     id: '3',
//     source: require('../../assets/stories/3.jpg'),
//     user: 'alexandergarcia',
//     avatar: require('../../assets/avatars/alexandergarcia.png'),
//   },
//   {
//     id: '1',
//     source: require('../../assets/stories/1.jpg'),
//     user: 'andrea.schmidt',
//     avatar: require('../../assets/avatars/andrea.schmidt.png'),
//   },
// ];

//import { Container } from './styles';

export default function Home() {
  const PostsJSON = useSelector((state) => state.feed.data);

  const { width, height } = Dimensions.get("window");

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>       
        
        <FlatList
          data={PostsJSON}
          renderItem={({ item, index }) => (
            <Posts {...{ item, index }} key={index.toString()} />
          )}
          keyExtractor={(item) => item.id}
          snapToInterval={height}
          decelerationRate={"fast"}
        />
 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9E9BA2",
  },
});
