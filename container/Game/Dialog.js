import React, { Component }     from "react"
import { connect }              from "react-redux"
import PropTypes                from 'prop-types'
import { bindActionCreators }   from "redux"
import {
    View, TouchableHighlight,
    Image,
    ScrollView, StatusBar,
    StyleSheet }                from "react-native"
import FontAwesome              from 'react-native-vector-icons/FontAwesome'

import * as operateActions      from "../../action/operate"

import OperateBtn               from "../../component/dialog/OperateBtn"
import DialogComponent          from "../../component/dialog/DialogComponent"

const DialogData = require('../../design/dialogTest.json');
const BackgroundImg = require('./assets/Bg01.jpg');

@connect(
    state => ({
        userInfo: state.userInfo,
        testAvailableArray: state.plot
    }),
    dispatch => ({
        actions : bindActionCreators(operateActions, dispatch)
    })
)
class Dialog extends Component {

    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        testAvailableArray: PropTypes.object.isRequired
    };

    async componentWillMount() {
        setTimeout(() => this.scrollView.scrollToEnd({animated: false}), 0);
    }

    componentDidUpdate() {
        setTimeout(() => this.scrollView.scrollToEnd({animated: true}), 0);
    }
    
    render() {
        const { userInfo, navigation, testAvailableArray, actions } = this.props;

        let pages =[];
        const playList = DialogData.data;
        const listLength = testAvailableArray.plotIndex.length;
        const last = testAvailableArray.plotIndex[listLength - 1];

        for (let i = 0; i < listLength; i++) {
            let j = testAvailableArray.plotIndex[i];
            pages.push(
                <View key={j} style={styles.dialog} >
                    {playList[j].dialog.map((piece, i) => {
                        return (<DialogComponent key={piece.sentence || i} dialog={piece} />)
                    })}
                    <View style={styles.opt}>
                        {playList[j].operate.map((piece, i) => {
                            return (<OperateBtn key={piece.index || i} actions={actions} operate={piece} lastPlotIndex={last} lastDialogIndex={j} />)
                        })}
                    </View>
                </View>
            );
        }

        return (
            <Image style={styles.container} source={ BackgroundImg } >
                <ScrollView ref={(scrollView) => { this.scrollView = scrollView }}>
                    <StatusBar hidden={true} backgroundColor={'rgba(38,38,38,1)'} />
                    {pages}
                </ScrollView>

                <TouchableHighlight
                    style={styles.iconTouch}
                    onPress={() => navigation.navigate('DrawerOpen')}
                >
                    <FontAwesome name="eercast" size={24} color={'rgba(255,255,255,0.8)'} />
                </TouchableHighlight>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null
    },
    dialog: {
        marginTop: 7,
        flex: 1,
    },
    text: {
        color: '#ffffff',
    },
    opt: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: "wrap",
    },
    iconTouch: {
        position: 'absolute',
        bottom: 72.5,
        left: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Dialog
