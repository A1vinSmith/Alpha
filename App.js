import App from "./container"
export default App
/*
import React, { Component }                     from 'react';
import { StyleSheet, Text, View, Button }       from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect }                    from "react-redux";

// import Routes from "./config/routes";
import getStore from "./store/getStore";
import {AppNavigator} from "./container/AppNavigator"

@connect(state => ({
  nav: state.nav
}))
class AppWithNavigationState extends Component {
  render() {
      return (
          <AppNavigator
              navigation={addNavigationHelpers({
                  dispatch: this.props.dispatch,
                  state: this.props.nav
              })}
          />
      );
  }
}

const store = getStore()
/*
export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
*/
/*
export default function NCAP() {
  return (
      <Provider store={store}>
          <AppWithNavigationState />
      </Provider>
  );
}
*/
/*
export default class App extends React.Component {
  render() {
    return(
       <SimpleApp />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/