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
        // 汉字 16个字符以内
        // 英文 36个字符以内
        color: 'yellow', textAlign: 'center', textAlignVertical:'center',
        fontSize: 14,
        width: 150, height: 50, lineHeight: 20,
        paddingLeft: 5, paddingRight: 5, paddingTop: 2,
        backgroundColor: 'blue',
    }
});

export default connect(mapDispatchToProps)(OperateBtn);