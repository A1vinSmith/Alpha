import React from 'react';
import { StyleSheet, Text, View, Button }       from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Routes from "../config/routes";

const AppNavigator = StackNavigator(Routes, {
    navigationOptions: {
        title: ({ state }) => {
            if (state.params) {
                return `${state.params.title}`;
            }
        }
    }
});

export default AppNavigator