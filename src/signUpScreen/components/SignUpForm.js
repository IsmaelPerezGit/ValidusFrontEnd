import React, { Component } from 'react';
import {
    TextInput,
    Button,
    View,
    StyleSheet} from 'react-native';

class SignUpForm extends Component {
    onButtonPress() {
        alert("I need Info!!");
    }

    render() {
        return (
            <View style={styles.signUpFormCont}>
                <TextInput
                    style={styles.signUpForm}
                    onChangeText={(text) => this.setState({text})}
                    value={"  username"}
                />
                <TextInput
                    style={styles.signUpForm}
                    onChangeText={(text) => this.setState({text})}
                    value={"  password"}
                />
                <TextInput
                    style={styles.signUpForm}
                    onChangeText={(text) => this.setState({text})}
                    value={"  verify password"}
                />
                <Button
                    onPress={() => this.onButtonPress()}
                    title="Submit"
                    color="orange"/>
            </View>
        );
    }
};

export default SignUpForm;

const styles = StyleSheet.create({
    signUpForm: {
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
    signUpFormCont: {
        height: '30%',
        marginTop: '10%',
        alignItems: 'center'
    },
});
