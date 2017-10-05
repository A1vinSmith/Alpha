/**
 * @flow
 */
import React                        from 'react'
import {
    Platform, StyleSheet,
    Text, ScrollView, StatusBar }   from 'react-native'
import { DrawerNavigator }          from 'react-navigation'
import MaterialIcons                from 'react-native-vector-icons/MaterialIcons'

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
        <StatusBar hidden={true} backgroundColor='rgba(38,38,38,1)' />
        <Text>Action Points: 5</Text>
        <Text>Exposure: 10%</Text>
    </ScrollView>
);
InboxScreen.navigationOptions = {
    drawerLabel: 'Analyze',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="assessment" size={24} style={{ color: tintColor }} />
    )
};

const DraftsScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <StatusBar hidden={true} backgroundColor={'rgba(38,38,38,1)'} />
        <Text>Save</Text>
        <Text>Restart</Text>
        <Text>The End</Text>
    </ScrollView>
);
DraftsScreen.navigationOptions = {
    drawerLabel: 'Setting',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="settings" size={24} style={{ color: tintColor }} />
    )
};

DialogScreen.navigationOptions = {
    drawerLabel: 'Operate',
    drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="smartphone" size={24} style={{ color: tintColor }} />
    ),
};

const MainApp = DrawerNavigator(
    {
        Dialog: {
            path: '/',
            screen: DialogScreen,
        },
        Analyze: {
            path: '/analyze',
            screen: InboxScreen,
        },
        Setting: {
            path: '/setting',
            screen: DraftsScreen,
        },

    },
    {
        initialRouteName: 'Dialog',
        contentOptions: {
            activeTintColor: 'pink',
            //activeTintColor: 'rgba(138,211,255,1)',
            inactiveTintColor: 'rgba(184,184,184,0.5)',
            activeBackgroundColor: 'rgba(0,0,0,0.3)',
            //inactiveBackgroundColor: '#1f1f1f',
            style: {
                backgroundColor: 'rgba(23,23,23,1)',
                flex: 1 // Use this to make background covered
            }
        },
    }
);

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : 0,
    },
});

export default MainApp
