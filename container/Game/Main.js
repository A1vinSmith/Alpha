/**
 * @flow
 */

import React                                        from 'react'
import { Button, Platform, ScrollView, StyleSheet } from 'react-native'
import { DrawerNavigator }                          from 'react-navigation'
import MaterialIcons                                from 'react-native-vector-icons/MaterialIcons'
import SampleText                                   from '../../component/tabs/SampleText'

/*
const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView style={styles.container}>
        <SampleText>{banner}</SampleText>
        <Button
            onPress={() => navigation.navigate('DrawerOpen')}
            title="Open drawer"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);
*/
// Usage: <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />

const InboxScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <SampleText>Now it's inbox screen</SampleText>
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);
InboxScreen.navigationOptions = {
    drawerLabel: 'Inbox',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons
            name="move-to-inbox"
            size={24}
            style={{ color: tintColor }}
        />
    ),
};

const DraftsScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <SampleText>Now it's draft screen</SampleText>
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);
DraftsScreen.navigationOptions = {
    drawerLabel: 'Drafts',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
    ),
};

const MainApp = DrawerNavigator(
    {
        Inbox: {
            path: '/',
            screen: InboxScreen,
        },
        Drafts: {
            path: '/sent',
            screen: DraftsScreen,
        },
    },
    {
        //initialRouteName: 'Drafts',
        initialRouteName: 'Inbox',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
    }
);

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
});

export default MainApp
