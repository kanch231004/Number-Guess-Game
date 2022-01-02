import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import color from "../constants/color";

const StartGameScreen = props => {

    const [enteredText, setEnteredText] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const inputTextHandler = inputText => {
        setEnteredText(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredText('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const choseNumber = parseInt(enteredText);
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber >= 99) {
            Alert.alert(
                'Invalid number!',
                'Number should be in range 1 to 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
            
        setConfirmed(true);
        setSelectedNumber(choseNumber);
        setEnteredText('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style = {styles.summary}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title = "Start Game" onPress = {() => {props.onStartGame(selectedNumber)}}></Button>
            </Card>
        );
    }

    return(
        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
        <View style = {styles.screen}>
            <Text style = {styles.title}> Start a New Game!</Text>
            <Card style = {styles.inputContainer}>                
                    <Text>Select a Number</Text>
                    <Input
                     style = {styles.input}
                     blurOnSubmit autoCapitalize = 'none'
                     autoCorrect = {false}
                     keyboardType = 'number-pad'
                     maxLength = {2}
                     onChangeText = {inputTextHandler}
                     value = {enteredText} />
                    <View style = {styles.btnContainer}>
                        <View style = {styles.btn}><Button title = "Reset" onPress = {() => {resetInputHandler()}} color = {color.primary}/></View>
                        <View style = {styles.btn}><Button title = "Confirm" onPress = {() => {confirmInputHandler()}}/></View>
                    </View>
            </Card>
            {confirmedOutput}        
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        padding: 36

    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'

    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    btn: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summary: {
        marginTop: 10
    }
});

export default StartGameScreen;