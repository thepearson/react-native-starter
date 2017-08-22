import * as firebase from 'firebase';
import { AUTH_SIGNIN } from './auth';

// Constants
const USER_SIGNUP_START = 'app/user/signup/start';
const USER_SIGNUP_ERROR = 'app/user/signup/error';
const USER_SIGNUP_STOP = 'app/user/signup/stop';

// export const constants = { };

// Action Creators
export function signUp(email, password, cb) {
  return (dispatch, getState) => {
    dispatch({
      type: USER_SIGNUP_START,
      payload: {
        email: email,
        password: password
      }
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        dispatch({
          type: AUTH_SIGNIN,
          payload: user
        });

        dispatch({
          type: USER_SIGNUP_STOP,
          payload: user
        });

        if (cb) {
          cb();
        }
      })
      .catch(function(error) {
        dispatch({
          type: USER_SIGNUP_ERROR,
          payload: {
            message: error.message,
            code: error.code
          }
        });
      });
  };
}

export const actions = {
  signUp
};

// Reducer
export const defaultState = {
  loading: false,
  error: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case USER_SIGNUP_START:
      return {...state, loading: true, error: null};
    case USER_SIGNUP_ERROR:
      return {...state, loading: false, error: action.payload.message};
    case USER_SIGNUP_STOP:
      return {...state, loading: false, error: null};
    default:
      return state;
  }
}
