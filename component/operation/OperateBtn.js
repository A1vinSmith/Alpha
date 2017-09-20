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
        <Text
            style={styles.text}>
            {message}
        </Text>
    </TouchableHighlight>
);

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
});

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },
    text: {
        color: 'yellow', textAlign: 'center', textAlignVertical:'center',
        fontSize: 15,
        width: 150, height: 50, lineHeight: 20,
        paddingLeft: 5, paddingRight: 5,
        backgroundColor: 'blue',
    }
});

export default connect(mapDispatchToProps)(OperateBtn);