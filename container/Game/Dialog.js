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

@connect(
    state => ({
        userInfo: state.userInfo
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
        const { userInfo, navigation } = this.props;
        const testMessages = [{id: 0, act: 'investigate space transfer station connect'}, {id: 1, act: '调查空间转移站,调查空间转移站观察'}, {id: 2, act: '等待结果，从长计议,调查时间表观察'}, {id: 3, act: 'Waiting for results, connect temporary'}];
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
                <Text>Fetch Done{userInfo.user_name}</Text>
                <View style={styles.opt}>
                {testMessages.map((testMessage, i) => {
                    return (<OperateBtn key={testMessage.id || i} message={testMessage.act} />)
                })}
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    opt: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: "wrap",
    }
});

export default Dialog
