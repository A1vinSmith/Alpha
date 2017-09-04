import React                    from "react";
import { connect }              from "react-redux";
import { bindActionCreators }   from "redux";
import { View, 
         Text, 
         TouchableOpacity }     from "react-native";

import BaseList         from "./BaseList";
import * as carsActions from "../action/cars";

class MakeList extends BaseList {
    getListData() {
        return this.props.makes.Results;
    }

    renderRow = make => {
        return (
            <TouchableOpacity onPress={this.onMakePress.bind(null, make)}>
                <View>
                    <Text>{make.Make}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    onMakePress = make => {
        const navigate = this.props.navigation.navigate;
        this.props
            .fetchModels(make)
            .then(() => navigate('Models', {title : make.Make}));
    };
}

export default connect(
    state => ({
        makes: state.cars.makes
    }),
    dispatch => bindActionCreators(carsActions, dispatch)
)(MakeList);
