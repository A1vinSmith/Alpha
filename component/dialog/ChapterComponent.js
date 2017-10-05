import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import {
    View,
    StyleSheet, Text }      from 'react-native'

export default class ChapterComponent extends Component {
    static propTypes = {
        chapter: PropTypes.string.isRequired,
        scene: PropTypes.string.isRequired
    };

    render() {
        const { chapter, scene } = this.props;
        return (
            <View style={styles.chapter}>
                <Text style={styles.chapterText}>
                    {chapter}{scene}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chapter: {
        position: 'absolute', width: '100%',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,1)'
    },
    chapterText: {
        color: 'white',
        fontSize: 17,
        paddingBottom: 15
    }
});