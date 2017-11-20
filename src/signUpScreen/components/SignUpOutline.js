import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet} from 'react-native';

export default class Signup extends Component {

    onButtonPress() {
        const { email, password } = this.state;
        alert("This does nothing");
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.signInForm}
                    onChangeText={(text) => this.setState({text})}
                    value={"  username"}
                />
                <TextInput
                    style={styles.signInForm}
                    onChangeText={(text) => this.setState({text})}
                    value={"  password"}
                />
                <TextInput
                    style={styles.signInForm}
                    onChangeText={(text) => this.setState({text})}
                    value={"  verify password"}
                />
                <Button
                    onPress={() => this.onButtonPress()}
                    title="Submit"
                    color="silver"/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'black',
        height: '60%',
        paddingTop: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative'
    },
    title: {
        fontSize: 40,
        // height: '30%',
        textAlign: 'center',
        color: '#b21726',
        width: '40%',
    },
    signInForm: {
        height: 40,
        width: '85%',
        borderColor: 'black',
        backgroundColor: '#222222',
        borderWidth: 1,
        marginTop: '5%',
        color: 'silver',
        borderRadius:10,
        alignItems:'center'
    },
    signInFormCont: {
        height: '30%',
        marginTop: '25%',
        alignItems: 'center'
    },
});

