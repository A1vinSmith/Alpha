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
                <Text style={styles.character}>
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
        paddingTop: 10,
    },
    text: {
        color: 'rgba(183,232,118,1.0)', textAlign: 'left', textAlignVertical:'center',
        paddingLeft: 7, paddingTop: 10,
        borderRadius: 10, borderWidth: 5, borderColor: 'rgba(0,0,0,0.5)',
        fontSize: 14, alignSelf: 'flex-end',
        marginBottom: 10,
        backgroundColor: 'rgba(28,38,43,1.0)',
        maxWidth: 300,
    },
    character: {
        color: 'rgba(157,157,0,0.9)', textAlign: 'center', textAlignVertical:'center',
        borderRadius: 11, borderWidth: 2.5, borderColor: 'rgba(225,172,72,0.6)',
        fontSize: 16, alignSelf: 'flex-end',
        marginBottom: 10,
        paddingTop: 3, paddingBottom: 2, paddingRight: 3, paddingLeft: 3,
    }
});