import React          from 'react';
import PropTypes      from 'prop-types';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#F5FCFF',
        backgroundColor: '#050806',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'pink',
    },
    heartBeat: {
        width: 100, height: 50,
    }
});

const ProfileScreen = ({navigation}) => (
  <View style={styles.container}>
    <Text 
      style={styles.welcome}
      onPress={() => navigation.navigate('Home')}
      >
      Profile Screen
    </Text>
      <Image
          style={styles.heartBeat}
          source={require('./assets/gif/heartBeat.gif')}
      />
    <Button 
      style={styles.welcome}
      onPress={() => navigation.navigate('LotsOfScreen')}
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
