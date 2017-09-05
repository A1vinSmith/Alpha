import React, { Component } from "react"
import { Provider }         from "react-redux"

import getStore             from "../store"
import AppNavigationState   from "./AppNavigationState"

const store = getStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigationState />
            </Provider>
        );
    }
}
  
export default App