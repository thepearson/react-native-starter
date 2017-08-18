import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const propTypes = {};

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>Profile, you are signed in if you see this.</Text>
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

Profile.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
