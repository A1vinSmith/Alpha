import React, { Component }     from "react"
import { connect }              from "react-redux"
import PropTypes                from 'prop-types'
import { bindActionCreators }   from "redux"
import {
    View, ScrollView,
    Text, Button, StatusBar,
    StyleSheet }                from "react-native"
import * as testActions         from "../../action/test"
import OperateBtn               from "../../component/dialog/OperateBtn"
import DialogComponent          from "../../component/dialog/DialogComponent"

const DialogData = require('../../design/dialogTest.json');

@connect(
    state => ({
        userInfo: state.userInfo,
        testAvailableArray: state.plot
    }),
    dispatch => bindActionCreators(testActions, dispatch)
)
class Dialog extends Component {

    static propTypes = {
        userInfo: PropTypes.object.isRequired
    };

    async componentWillMount() {
        this.setState({
            loading: true
        });

        // connect map state to props
        // bindActionCreator === mapDispatchToProps
        // ALL BIND THESE TO this.props
        await this.props.getCustomData();
        await this.setState({
            loading: false
        });
        setTimeout(() => this.scrollView.scrollToEnd({animated: false}), 0);
    }

    componentDidUpdate() {
        setTimeout(() => this.scrollView.scrollToEnd({animated: true}), 0);
    }
    
    render() {
        const { userInfo, navigation, testAvailableArray } = this.props;

        let pages =[]; const playList = DialogData.data;
        //const testAvailableArray = [0,1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // May need ENUM
        /*
        for (let i in testAvailableArray) {
            pages.push(
                <View key={i} style={styles.dialog} >
                    <Text style={styles.text}>{playList[i].dialog}</Text>
                    <View  style={styles.opt}>
                    {playList[i].operate.map((testMessage, i) => {
                        return (<OperateBtn key={testMessage.id || i} message={testMessage.act} />)
                    })}
                    </View>
                </View>
            );
        }
        */
        for (let i = 0; i < testAvailableArray.length; i++) {
            let j = testAvailableArray[i];
            //console.log(j);
            pages.push(
                <View key={j} style={styles.dialog} >
                    {playList[j].dialog.map((piece, i) => {
                        return (<DialogComponent key={piece.sentence || i} dialog={piece} />)
                    })}
                    <View style={styles.opt}>
                        {playList[j].operate.map((piece, i) => {
                            return (<OperateBtn key={piece.index || i} operate={piece} />)
                        })}
                    </View>
                </View>
            );
        }
        /*
        for (let i = 0; i < playList.length; i++) {
            if (playList[i].display) {
                pages.push(
                    <View key={i} style={styles.opt}>
                        <Text>{playList[i].dialog}</Text>
                        {playList[i].operate.map((testMessage, i) => {
                            return (<OperateBtn key={testMessage.id || i} message={testMessage.act} />)
                        })}
                    </View>
                );
            }
        }
        */

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
