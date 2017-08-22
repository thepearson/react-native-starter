import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-native';
import { Spinner, Content, Form, Item, Input, Button, Text } from 'native-base';

import { signUp } from '../../redux/modules/user';

const propTypes = {
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.updateEmailInput = this.updateEmailInput.bind(this);
    this.updatePasswordInput = this.updatePasswordInput.bind(this);
    this.submitData = this.submitData.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  updatePasswordInput(value) {
    this.setState({
      password: value
    });
  }

  updateEmailInput(value) {
    this.setState({
      email: value
    });
  }

  submitData() {
    const { history } = this.props;
    this.props.signUp(this.state.email, this.state.password, () => { history.push('/dash'); });
  }

  render() {
    const { error, loading } = this.props;
    let button_values = {
      full: true,
      success: true
    };

    if (loading) {
      button_values = {
        full: true,
        disabled: true
      };
    }
    return (
      <Content>
        <Form>
          {error ? <Text>{error}</Text> : null}
          <Item>
            <Input onChangeText={this.updateEmailInput} placeholder="Email" />
          </Item>
          <Item last>
            <Input secureTextEntry onChangeText={this.updatePasswordInput} placeholder="Password" />
          </Item>
          <Button {...button_values} onPress={this.submitData}>
            {loading ? <Spinner color='blue' /> : <Text>Sign up</Text>}
          </Button>
        </Form>

        <Button transparent info>
          <Link to="/signin">
            <Text>Already have an account?</Text>
          </Link>
        </Button>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.user.loading,
    error: state.user.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password, cb) => {
      dispatch(signUp(email, password, cb));
    }
  };
};

SignUp.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUp));
