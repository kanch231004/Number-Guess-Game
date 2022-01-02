import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Header = props => {
    return (
        <View style = {style.header}>
            <Text style={style.headerTitle}>{props.title}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.black,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;