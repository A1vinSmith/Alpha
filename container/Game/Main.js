/**
 * @flow
 */

import React                                        from 'react'
import { Button, Platform, ScrollView, StyleSheet } from 'react-native'
import { DrawerNavigator }                          from 'react-navigation'
import MaterialIcons                                from 'react-native-vector-icons/MaterialIcons'
import SampleText                                   from '../../component/tabs/SampleText'

import DialogScreen from './Dialog'

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
    drawerLabel: 'Analyze',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="assessment" size={24} style={{ color: 'rgba(0,0,0,0.9)' }} />
    ),
};

const DraftsScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <SampleText>Now it's draft screen</SampleText>
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);
DraftsScreen.navigationOptions = {
    drawerLabel: 'Setting',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="settings" size={24} style={{ color: 'rgba(0,0,0,0.9)' }} />
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
        Dialog: {
            path: '/dialog',
            screen: DialogScreen,
        }
    },
    {
        //initialRouteName: 'Drafts',
        initialRouteName: 'Inbox',
        contentOptions: {
            activeTintColor: '#b8b8b8',
            //inactiveBackgroundColor: '#1f1f1f',
            style: {
                backgroundColor: 'rgba(38,38,38,1)',
                flex: 1 // Use this to make background covered
            }
        },
    }
);

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
});

export default MainApp
