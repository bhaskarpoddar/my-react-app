import { combineReducers } from "redux";
import {
    userService
} from "services";

const dataStore = combineReducers({
    user: userService.reducer,
});

export default combineReducers({
    dataStore,
});
