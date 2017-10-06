import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import {
    View,
    StyleSheet, Text }      from 'react-native'
import FontAwesome          from 'react-native-vector-icons/FontAwesome'

export default class ChapterComponent extends Component {
    static propTypes = {
        chapter: PropTypes.string.isRequired,
        scene: PropTypes.string.isRequired
    };

    render() {
        const { chapter, scene } = this.props;
        return (
            <View style={styles.chapter}>
                <Text style={[styles.title, styles.chapterText]}>
                    {chapter}
                </Text>
                <Text style={[styles.title, styles.sceneText]}>
                    <FontAwesome name="map-marker" size={13} color={'rgba(205,205,205,1.0)'} />
                    &nbsp;&nbsp;
                    {scene}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chapter: {
        position: 'absolute', width: '100%', top: 0, left: 0,
        backgroundColor: 'rgba(10,10,10,1)'
    },
    title: {
        position: 'absolute', top: 0,
        paddingBottom: 5,
        fontFamily: 'Cochin',
        color: 'rgba(205,205,205,1.0)'
    },
    chapterText: {
        width: '100%',
        fontSize: 17, paddingTop: 5, paddingLeft: 10,
    },
    sceneText: {
        right: 0,
        fontSize: 10, paddingTop: 14, paddingRight: 9,
    }
});