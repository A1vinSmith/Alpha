import React, { Component } from "react"
import { Provider }         from "react-redux"

import getStore             from "../store"
import navReducer           from "../reducer/navReducer"
import AppNavigationState   from "./AppNavigationState"

const store = getStore(navReducer)

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