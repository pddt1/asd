import { combineReducers } from "redux";
import { Auth } from './auth/authReducers';
const reducers = combineReducers({
    Auth,
});

export default reducers;