import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { 
    Button, StyleSheet,
    Text, TextInput, View } from 'react-native'

import * as types           from '../../constant/ActionType'
import { setUserName }      from '../../action/login'


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Screen A
                </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to Answer!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍪').join(' ')}
                </Text>
                <Text style={styles.instructions}>
                    This is great
                </Text>
                <Button
                    onPress={() => {
                        navigation.dispatch(setUserName(this.state.text));
                        navigation.dispatch({ type: types.LOGIN })
                    }}
                    title="Log in"
                />
            </View>
        )
    }
}

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default LoginScreen
