import { combineReducers } from "redux";
import tweetsReducer from "./tweets";
import usersReducer from "./users";
import authedUserReducer from "./authUser";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
  authedUser: authedUserReducer,
});
