import React                from 'react';
import { StyleSheet, View } from 'react-native';

import AuthButton           from './AuthButton';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(9,7,8,1)',
    },
});

const MainScreen = () => (
  <View style={styles.container}>
      <AuthButton />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
