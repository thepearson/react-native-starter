import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Content, Text } from 'native-base';

const propTypes = {
};

class Dash extends Component {
  render() {
    return (
      <Content>
        <Text>Dash</Text>
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

Dash.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dash);
