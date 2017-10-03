import React, { Component } from 'react'
import PropTypes            from 'prop-types'
//import { connect }          from 'react-redux'
import {
    StyleSheet, Text,
    TouchableHighlight }    from 'react-native'
/*
import {
    saveCurrentPoint,
    loadLastPoint,
    addPlotIndex }          from '../../action/operate'
    */

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
            <TouchableHighlight
                style={styles.container} underlayColor={'black'}
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
                <Text
                    style={styles.text}>
                    {operate.action}
                </Text>
            </TouchableHighlight>
        )
    }
}
/*
const OperateBtn = ({ operate, dispatch, lastPlotIndex, lastDialogIndex }) => (
    <TouchableHighlight
        style={styles.container} underlayColor={'black'}
        onPress={() => {
            if (lastPlotIndex === lastDialogIndex) {
                dispatch(setUserName(operate.action));
                if (operate.index !== 9e15) {
                    dispatch(addPlotIndex(operate.index));
                    if (operate.save) { dispatch(saveCurrentPoint(operate.index)) }
                } else {
                    dispatch(loadLastPoint());
                }
            }

        }}>
        <Text
            style={styles.text}>
            {operate.action}
        </Text>
    </TouchableHighlight>
);
*/
/*
const mapDispatchToProps = dispatch => ({
    dispatch: dispatch
});
*/
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

//export default connect(mapDispatchToProps)(OperateBtn);