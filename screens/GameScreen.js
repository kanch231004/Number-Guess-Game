import React, { useEffect, useRef, useState } from "react";
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min))  + min;
    if (random === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return random;
};


const GameScreen = props => {
    const [currGuess, setCurrentGuess] = useState(
        generateRandomBetween(1,100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);
    const currMin = useRef(1);
    const currMax = useRef(100);
    const {userChoice, onGameOver} = props;

    useEffect(() => {
        if (currGuess === props.userChoice) {
            props.onGameOver(rounds);
        }
    }, [currGuess, userChoice, onGameOver]);

    const nextNumberHandler = direction => {
        if ((direction === 'lower' && currGuess < props.userChoice) || (direction === 'higher' && currGuess > props.userChoice)) {
                Alert.alert('Don\'t lie!.', 'You know that this is wrong..', [{text: 'Sorry!', style: 'cancel'}]);
                return;
        }
        if (direction === 'lower') {
            currMax.current = currGuess;
        } else {
            currMin.current = currGuess;
        }
        const nextNumber = generateRandomBetween(currMin.current, currMax.current, currGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return(
        <View style = {styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currGuess}</NumberContainer>
            <Card style = {styles.btnContainer}>
                <Button title = "Lower" onPress={nextNumberHandler.bind(this, 'lower')}/>
                <Button title = "Higher" onPress={nextNumberHandler.bind(this, 'higher')}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;