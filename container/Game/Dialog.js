import React, { Component }     from "react";
import { connect }              from "react-redux";
import PropTypes                from 'prop-types'
import { bindActionCreators }   from "redux";
import {
    View, ScrollView,
    Text, Button,
    StyleSheet }                from "react-native";
import MaterialIcons            from 'react-native-vector-icons/MaterialIcons'
import * as testActions         from "../../action/test";

@connect(
    state => ({
        userInfo: state.userInfo
    }),
    dispatch => bindActionCreators(testActions, dispatch)
)
class Dialog extends Component {
    static navigationOptions = {
        title: "hello world"
    };

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
        if (state.loading) {
            return (
                <View style={styles.container}>
                    <Text>Loading{userInfo.user_name}</Text>
                </View>
            );
        }

        return (
            <ScrollView style={styles.container}>
                <Button onPress={() => navigation.goBack(null)} title="Go back" />
                <Text>Fetch Done{userInfo.user_name}</Text>
            </ScrollView>

        );
    }
}

Dialog.navigationOptions = {
    drawerLabel: 'Dialog',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
    ),
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Dialog
