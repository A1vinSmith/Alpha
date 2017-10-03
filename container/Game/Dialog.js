import React, { Component }     from "react"
import { connect }              from "react-redux"
import PropTypes                from 'prop-types'
import { bindActionCreators }   from "redux"
import {
    View, ScrollView,
    Text, Button, StatusBar,
    StyleSheet }                from "react-native"
//import * as testActions         from "../../action/test"
import * as operateActions      from "../../action/operate"
import OperateBtn               from "../../component/dialog/OperateBtn"
import DialogComponent          from "../../component/dialog/DialogComponent"

const DialogData = require('../../design/dialogTest.json');

@connect(
    state => ({
        userInfo: state.userInfo,
        testAvailableArray: state.plot
    }),
    //dispatch => bindActionCreators(testActions, dispatch),
    dispatch => ({
        actions : bindActionCreators(operateActions, dispatch)
    })
)
class Dialog extends Component {

    static propTypes = {
        userInfo: PropTypes.object.isRequired
    };

    async componentWillMount() {
        this.setState({
            loading: true
        });

        await this.setState({
            loading: false
        });
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
            <ScrollView style={styles.container} ref={(scrollView) => { this.scrollView = scrollView }}>
                <StatusBar hidden={true} backgroundColor={'rgba(38,38,38,1)'} />
                <Button onPress={() => navigation.goBack(null)} title="Go back" />
                <Text style={styles.text}>Fetch Done{userInfo.user_name}</Text>
                {pages}
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    dialog: {
        marginTop: 7,
    },
    text: {
        color: '#ffffff',
    },
    opt: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: "wrap",
    }
});

export default Dialog
