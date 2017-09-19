import React            from 'react'
import { connect }      from 'react-redux'
import { setUserName }  from '../../action/login'
import {
    StyleSheet, Text,
    TouchableHighlight} from 'react-native'


const OperateBtn = ({ message, dispatch }) => (
    <TouchableHighlight
        style={styles.container} underlayColor={'black'}
        onPress={() => dispatch(setUserName(message))}>
        <Text style={styles.text}>
            {message}
        </Text>
    </TouchableHighlight>
);

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
});

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    btn: {
        color: 'blue',
        backgroundColor: 'blue'
    },
    text: {
        color: 'yellow', textAlign: 'center',
        fontSize: 15,
        width: 150, height: 70, lineHeight: 62,
        backgroundColor: 'blue',
    }
});

export default connect(mapDispatchToProps)(OperateBtn);