// Constants
const AUTH_SIGNIN = 'app/auth/signin';
const AUTH_SIGNOUT = 'app/auth/signout';

/* Action creators */
export function signIn(cb) {
  return (dispatch, getState) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        console.warn(user);
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    if (cb) {
      cb();
    }
  };
}

export function signOut(cb) {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.warn('Signed out');
      dispatch({
        type: AUTH_SIGNOUT,
        payload: {}
      });
    }, 1000); // fake async

    if (cb) {
      cb();
    }
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
