import React                  from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { NavigationActions }  from 'react-navigation'
import { Text, StyleSheet }   from 'react-native'


import * as types from "../../constant/ActionType"

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#F5FCFF',
        //backgroundColor: 'white',
        color: 'gray',
    }
});

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
    <Text
        style={styles.container}
        onPress={isLoggedIn ? logout : loginScreen} >
        {isLoggedIn ? 'Switch Account' : 'Log In'}
    </Text>
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
