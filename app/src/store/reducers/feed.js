import { ADD_TO_FEED } from "../actions/types";

const initialState = {
  data: [
    {
      id: "2",
      // source: require("../../assets/stories/2.jpg"),
      source: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      user: "derek.russel",
      avatar: require("../../assets/avatars/derek.russel.png"),
    },
    {
      id: "4",
      source: require("../../assets/stories/4.jpg"),
      user: "jmitch",
      avatar: require("../../assets/avatars/jmitch.png"),
    },
    {
      id: "5",
      source: require("../../assets/stories/5.jpg"),
      user: "monicaa",
      avatar: require("../../assets/avatars/monicaa.png"),
    },
    {
      id: "3",
      source: require("../../assets/stories/3.jpg"),
      user: "alexandergarcia",
      avatar: require("../../assets/avatars/alexandergarcia.png"),
    },
    {
      id: "1",
      source: require("../../assets/stories/1.jpg"),
      user: "andrea.schmidt",
      avatar: require("../../assets/avatars/andrea.schmidt.png"),
    },
  ],
};


export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_FEED:
      
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: ""+Object.keys(state.data).length + 1,
            source: {uri: payload.photo},
            user: payload.user,
            avatar: require("../../assets/avatars/andrea.schmidt.png"),
          },
        ],
      };
    default:
      return state;
  }
}
