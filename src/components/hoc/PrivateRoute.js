import React, {Component, PropTypes} from 'react';
import {Route, Redirect} from 'react-router-native';
import { connect } from 'react-redux';

const propTypes = {
};

class PrivateRoute extends Component {
  render() {
    const {authenticated, location, Component, ...rest} = this.props;
    return (
      authenticated ? (<Component {...rest} authenticated={authenticated} />) : (
        <Redirect to={{pathname: '/auth', state: {from: location}}}/>)
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

PrivateRoute.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);