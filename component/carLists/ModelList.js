import React                    from "react"
import { connect }              from "react-redux"
import { bindActionCreators }   from "redux"
import { View, 
         Text, 
         TouchableOpacity }     from "react-native"

import BaseList         from "./BaseList"
import * as carsActions from "../../action/cars"

@connect(
    state => ({
        models: state.cars.models
    }),
    dispatch => bindActionCreators(carsActions, dispatch)
)
class ModelList extends BaseList {
    getListData() {
        return this.props.models.Results;
    }

    renderRow = model => {
        return (
            <TouchableOpacity onPress={() => this.onModelPress(model)}>
                <View>
                    <Text>{model.Model}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    onModelPress = model => {
        const navigate = this.props.navigation.navigate;
        this.props
            .fetchVehicles(model)
            .then(() => navigate("Vehicles", { title: model.Model }));
    };
}
/*
export default connect(
    state => ({
        models: state.cars.models
    }),
    dispatch => bindActionCreators(carsActions, dispatch)
)(ModelList);
*/
export default ModelList