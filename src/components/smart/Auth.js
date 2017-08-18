import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';
import { signIn, signOut } from '../../redux/modules/auth';
import {Route, Redirect, withRouter} from 'react-router-native';

import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

const propTypes = {};

class Auth extends Component {
  render() {
    const { authenticated, history } = this.props;
    return (
      authenticated ? (
        <View>
          <Text>Welcome - You are signed in!</Text>
          <TouchableHighlight onPress={() => {this.props.signOut(() => { history.push('/'); })}}>
            <Text>Sign out</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <View>
          <Text>You are not signed in.</Text>
          <TouchableHighlight onPress={() => {this.props.signIn(() => { history.push('/profile'); })}}>
            <Text>Sign in</Text>
          </TouchableHighlight>
        </View>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (cb) => { dispatch(signIn(cb)); },
    signOut: (cb) => { dispatch(signOut(cb)); }
  };
};

Auth.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Auth));
