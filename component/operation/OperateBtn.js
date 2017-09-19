import React                        from 'react'
import { View, StyleSheet, Text }   from 'react-native'

const OperateBtn = ({ message }) => (
    <View style={styles.container}>
        <Text style={styles.text}>
            {message}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        //marginTop: Platform.OS === 'ios' ? 0 : 0,
    },
    btn: {
        color: 'blue',
        backgroundColor: 'blue'
    },
    text: {
        color: 'yellow', textAlign: 'center',
        fontSize: 15,
        width: 150, height: 70, lineHeight: 62,
        backgroundColor: 'blue',
    }
});

export default OperateBtn