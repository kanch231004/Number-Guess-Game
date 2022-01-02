import React from "react";
import { StyleSheet, View, Text} from 'react-native'
import color from "../constants/color";

const NumberContainer = props => {
    return <View style = {styles.select}> 
        <Text style = {styles.number}>{props.children}</Text>
    </View>
}

const styles = StyleSheet.create({
    select: {
        borderRadius: 10,
        borderColor: color.accent,
        width: 60,
        height: 40,
        padding: 5,
        marginVertical: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },

    number: {
        color: color.accent,
        fontSize: 20
    }
});

export default NumberContainer