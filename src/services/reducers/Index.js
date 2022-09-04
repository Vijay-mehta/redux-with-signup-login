import {combineReducers} from 'redux';
import userSignup from './Reducer';
import { userLogin } from './Reducer';

export default combineReducers({
    userSignup,
    userLogin
})