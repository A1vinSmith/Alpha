import React                  from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { NavigationActions }  from 'react-navigation'

import { Text, StyleSheet, View, Image, TouchableHighlight }   from 'react-native'

import * as types from "../../constant/ActionType"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginIcon: {
        //resizeMode: 'cover',
        width: 198, height: 198,
        margin: 150,
    },
    loginTip: {
        color: 'gray',
    }
});

const AuthButton = ({ logout, loginScreen, isLoggedIn, profileScreen }) => (
    <View style={styles.container}>
        <TouchableHighlight onPress={isLoggedIn ? profileScreen : loginScreen}>
            <Image
                style={styles.loginIcon}
                source={require('./assets/gif/loginIcon.gif')}
            />
        </TouchableHighlight>
        <Text
            style={styles.loginTip}
            onPress={isLoggedIn ? logout : loginScreen} >
            {isLoggedIn ? 'Switch Account' : ''}
        </Text>
    </View>
);

AuthButton.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    loginScreen: PropTypes.func.isRequired,
    profileScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: types.LOGOUT }),
    loginScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Login' })),
    profileScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Profile' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
