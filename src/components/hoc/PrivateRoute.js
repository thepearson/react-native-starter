import React, {Component, PropTypes} from 'react';
import {Route, Redirect} from 'react-router-native';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    props.authenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{pathname: '/auth', state: {from: props.location}}}/>
    )
  )}/>
));