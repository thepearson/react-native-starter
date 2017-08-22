import * as firebase from 'firebase';

import React, {Component} from 'react';
import {Provider} from "react-redux";
import {NativeRouter, Route} from 'react-router-native';
import PrivateRoute from './components/hoc/PrivateRoute';

import {
  Container, Header
} from 'native-base';

/* Local components */
import Home from './components/smart/Home';
import Dash from './components/smart/Dash';
import SignUp from './components/smart/SignUp';
import Settings from './components/smart/Settings';
import SignIn from './components/smart/SignIn';
import SignOut from './components/smart/SignOut';

import storeConfig from './redux/stores';

import config from './config';

const initialState = {};
const store = storeConfig(initialState);

/* Firebase */
firebase.initializeApp(config.firebase);

export default class ReactNativeStarter extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Container>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/signout" component={SignOut}/>
            <PrivateRoute path="/dash" component={Dash}/>
            <PrivateRoute path="/settings" component={Settings}/>
          </Container>
        </NativeRouter>
      </Provider>
    );
  }
}
