import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import {
    View,
    StyleSheet, Text }      from 'react-native'

export default class DialogComponent extends Component {
    static propTypes = {
        dialog: PropTypes.object.isRequired
    };

    render() {
        const { dialog } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {dialog.character}
                </Text>
                {dialog.lines.map((line,i)=>{
                    return (<Text key={i} style={styles.text}> {line} </Text>)
                })}
            </View>
        )
    }
}

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