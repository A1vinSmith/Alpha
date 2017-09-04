import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'pink',
  },
});

const ProfileScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text 
      style={styles.welcome}
      onPress={() => navigation.navigate('Home')}
      >
      Profile Screen
    </Text>
    <Button 
      style={styles.welcome}
      onPress={() => navigation.navigate('Home')}
      title="Press Me"
      >
    </Button>
  </View>
);

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;
