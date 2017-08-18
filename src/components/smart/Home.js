import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const propTypes = {};

class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home screen</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Home.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
