import React        from 'react'
import PropTypes    from 'prop-types'
import { connect }  from 'react-redux'
import { 
  Button, 
  StyleSheet, 
  Text, 
  View }                      from 'react-native'
import { NavigationActions }  from 'react-navigation'

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login: {
    color: '#808080'
  }
});

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return <Text style={styles.login}></Text>;
  }
  return (
    <View>
      <Text style={styles.welcome}></Text>
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(LoginStatusMessage);
