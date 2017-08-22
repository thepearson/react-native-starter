import {combineReducers} from 'redux';
import authReducer from './modules/auth';
import userReducer from './modules/user';

export default combineReducers({
  auth: authReducer,
  user: userReducer
});