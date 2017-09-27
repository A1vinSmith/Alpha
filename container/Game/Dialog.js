import React, { Component }     from "react"
import { connect }              from "react-redux"
import PropTypes                from 'prop-types'
import { bindActionCreators }   from "redux"
import {
    View, ScrollView,
    Text, Button, StatusBar,
    StyleSheet }                from "react-native"
import * as testActions         from "../../action/test"
import OperateBtn               from "../../component/operation/OperateBtn"

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
        //await console.log(this.props.userInfo.user_name);
        await this.props.getCustomData();
        await this.setState({
            loading: false
        });
    }

    render() {
        const state = this.state;
        const { userInfo, navigation, testAvailableArray } = this.props;

        let pages =[]; const playList = DialogData.data;
        //const testAvailableArray = [0,1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // May need ENUM
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
        if (state.loading) {
            return (
                <View style={styles.container}>
                    <Text>Loading{userInfo.user_name}</Text>
                </View>
            );
        }

        return (
            <ScrollView style={styles.container}>
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
