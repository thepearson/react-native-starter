import React, {Component} from 'react';
import {Route, Redirect, withRouter} from 'react-router-native';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    const {authenticated, component: Component, ...rest} = this.props;
    return (<Route {...rest} render={(props) => {
      if (authenticated) {
        return (<Component {...props} />);
      }
      else {
        return <Redirect to={{
          pathname: '/signup',
          state: { from: props.location }
        }}/>
      }
    }}/>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
