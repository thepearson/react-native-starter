import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
};

class SignOut extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

SignOut.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignOut);
