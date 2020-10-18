import { combineReducers } from "redux";

import postsReducer from "./postsReducers";
import usersReducer from "./usersReducers";

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});



