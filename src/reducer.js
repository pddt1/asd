import { combineReducers } from "redux";
import { Auth } from './auth/authReducers';
import { Course } from "./page/courseReducers";
const reducers = combineReducers({
    Auth,
    Course
});

export default reducers;