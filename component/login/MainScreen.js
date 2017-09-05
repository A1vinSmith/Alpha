import React                from 'react';

import LoginStatusMessage   from './LoginStatusMessage';
import AuthButton           from './AuthButton';

import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
        backgroundColor: '#0a0809',
    },
    loginIcon : {
        //resizeMode: 'cover',
        width: 200,
        height: 200,
    }

});

const MainScreen = () => (
  <View style={styles.container}>
      <Image
          style={styles.loginIcon}
          source={require('./assets/gif/loginIcon.gif')}
      />
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;
