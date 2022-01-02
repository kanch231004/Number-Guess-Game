import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = props => {
    return (
        <View style ={styles.gameOver}>
            <Text>Game over!</Text>
            <Text>The number is: {props.userNumber}</Text>
            <Text> No of Rounds are: {props.guessRounds}</Text>
            <Button title = "New Game" onPress = {props.onRestart}/>
        </View>
    );
};

const styles = StyleSheet.create({
    gameOver: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default GameOverScreen;