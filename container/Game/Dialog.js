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
        const testMessages = [{id: 0, act: 'listen0'}, {id: 1, act: 'say1'}, {id: 2, act: 'read2'}, {id: 3, act: 'write3'}];
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
                {testMessages.map((testMessage, i) => {
                    return (<OperateBtn key={testMessage.id || i} message={testMessage.act} />)
                })}
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Dialog
