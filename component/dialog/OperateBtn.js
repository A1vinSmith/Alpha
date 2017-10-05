import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import {
    StyleSheet, Text,
    View, TouchableOpacity
    }                       from 'react-native'
import FadeInView           from '../animated/FadeInView'

export default class OperateBtn extends Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        operate: PropTypes.object.isRequired,
        lastPlotIndex: PropTypes.number.isRequired,
        lastDialogIndex: PropTypes.number.isRequired
    };

    render() {
        const { actions, operate, lastPlotIndex, lastDialogIndex } = this.props;
        return (
            <TouchableOpacity
                style={styles.container} activeOpacity={0.25}
                onPress={() => {
                    if (lastPlotIndex === lastDialogIndex) {
                        if (operate.index !== 9e15) {
                            actions.addPlotIndex(operate.index);
                            if (operate.save) { actions.saveCurrentPoint(operate.index) }
                        } else {
                            actions.loadLastPoint();
                        }
                    }
                }}>
                <View >
                    <FadeInView>
                        <Text style={styles.text}>
                            {operate.action}
                        </Text>
                    </FadeInView>
                </View>

            </TouchableOpacity>
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
        color: 'rgba(160,176,185,1.0)', textAlign: 'left', textAlignVertical:'center',
        fontSize: 14,
        height: 30, lineHeight: 20,
        paddingLeft: 5, paddingRight: 5, paddingTop: 2,
        backgroundColor: 'rgba(23,29,33,1.0)',
    }
});
