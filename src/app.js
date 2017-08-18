import React, {Component} from 'react';
import {Provider} from "react-redux";
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import {NativeRouter, Route, Link, Redirect} from 'react-router-native';


import PrivateRoute from './components/hoc/PrivateRoute';
import Home from './components/smart/Home';
import Auth from './components/smart/Auth';
import Profile from './components/smart/Profile';

import storeConfig from './redux/stores';


const initialState = {};
const store = storeConfig(initialState);

export default class ReactNativeStarter extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View>
            <View>
              <Link to="/"><Text>Home</Text></Link>
              <Link to="/profile"><Text>Profile (protected)</Text></Link>
              <Link to="/auth"><Text>Authentication</Text></Link>
            </View>

            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/profile" component={Profile} />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
