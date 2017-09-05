import React                  from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { Button }             from 'react-native'
import { NavigationActions }  from 'react-navigation'

import * as types from "../../constant/ActionType"

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <Button
    title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
    onPress={isLoggedIn ? logout : loginScreen}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: types.LOGOUT }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
