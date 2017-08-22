import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Text } from 'native-base';

const propTypes = {
};

class Settings extends Component {
  render() {
    return (
      <Content>
        <Text>Settings</Text>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

Settings.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
