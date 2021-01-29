import { createStore, applyMiddleware,combineReducers  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import auth from "./reducers/auth"
import message from "./reducers/message"
import feed from './reducers/feed'

const middleware = [thunk];

const rootReducer = combineReducers({
  auth,
  feed,
  message,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
