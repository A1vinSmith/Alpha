import React from 'react';
import { StyleSheet, Text, View, Button }       from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Routes from "../config/routes";

const AppNavigator = StackNavigator(Routes);

export default AppNavigator