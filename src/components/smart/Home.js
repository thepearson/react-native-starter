import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-native';
import {
  Thumbnail,
  Text,
  Content
} from 'native-base';

import {
  StyleSheet,
  View
} from 'react-native';

const propTypes = {};

class Home extends Component {
  render() {
    setTimeout(() => {
      if (this.props.authenticated) {
        this.props.history.push('/dash');
      }
      else {
        this.props.history.push('/signin');
      }
    }, 3000);

    return (
      <View style={styles.grid}>
        <Thumbnail square large source={require('../../assets/logo.png')}/>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
