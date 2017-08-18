// Constants
const AUTH_SIGNIN = 'app/auth/signin';
const AUTH_SIGNOUT = 'app/auth/signout';

/* Action creators */
export function signIn(cb) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: AUTH_SIGNIN,
        payload: {}
      });

      if (cb) {
        cb();
      }
    }, 1000); // fake async
  };
}

export function signOut(cb) {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: AUTH_SIGNOUT,
        payload: {}
      });

      if (cb) {
        cb();
      }
    }, 1000); // fake async
  };
}

export const combinedActions = {
  signIn,
  signOut
};

/* Reducer defaults */
export const defaultState = {
  authenticated: false
};

/* Define reducer */
export default function (state = defaultState, action) {
  switch (action.type) {
    case AUTH_SIGNIN:
      return {...state, authenticated: true};
    case AUTH_SIGNOUT:
      return {...state, authenticated: false};
    default:
      return state;
  }
}
