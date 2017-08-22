import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-native';
import { Content, Form, Item, Input, Button, Text } from 'native-base';

const propTypes = {
};

class SignIn extends Component {
  render() {
    return (
      <Content>
        <Form>
          <Item>
            <Input placeholder="Email" />
          </Item>
          <Item last>
            <Input secureTextEntry placeholder="Password" />
          </Item>

          <Button full success>
            <Text>Sign in</Text>
          </Button>
        </Form>

        <Button transparent info>
          <Link to="/signup">
            <Text>No account? Sign up here.</Text>
          </Link>
        </Button>
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

SignIn.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
