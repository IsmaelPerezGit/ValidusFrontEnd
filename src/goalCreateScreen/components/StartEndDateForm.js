import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet} from 'react-native';

const StartEndDateForm = () => {
    return (
        <View style={styles.formCont}>
            <TextInput
                style={styles.startEnd}
                onChangeText={(text) => this.setState({text})}
                value={"  Start Date"}
            />
            <TextInput
                style={styles.startEnd}
                onChangeText={(text) => this.setState({text})}
                value={"  End Date"}
            />
            <Button
                onPress={printThing = () => {
                    alert("This does nothing")
                }}
                title="Submit"
                color="silver"/>
        </View>
    );
};

export default StartEndDateForm;

const styles = StyleSheet.create({
    formCont: {
        alignItems:'center'
    },
    startEnd: {
        height: 40,
        width: '85%',
        borderColor: 'black',
        backgroundColor: '#222222',
        borderWidth: 1,
        marginTop: '5%',
        color: 'silver',
        borderRadius: 10,
        alignItems: 'center'
    }
});
