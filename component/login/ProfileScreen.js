import React          from 'react';
import PropTypes      from 'prop-types';
import { connect }    from 'react-redux'
import { StyleSheet, Text, Image, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

const ProfileScreen = ({navigation, user_name}) => (
  <View style={styles.container}>
    <Text 
      style={styles.welcome}
      onPress={() => navigation.navigate('Home')}
      >
      Cars {user_name}
    </Text>
      <Image
          style={styles.heartBeat}
          source={require('./assets/gif/heartBeat.gif')}
      />
    <Button 
      style={styles.welcome}
      onPress={() => navigation.navigate('LotsOfScreen')}
      title="Tabs"
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

const mapStateToProps = state => ({
    user_name: state.userInfo.user_name
});

export default connect(mapStateToProps)(ProfileScreen);
