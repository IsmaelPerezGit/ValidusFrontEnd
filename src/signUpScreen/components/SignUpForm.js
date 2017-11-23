import React, { Component } from 'react';
import {
    TextInput,
    Button,
    View,
    StyleSheet} from 'react-native';

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            verifyPassword: ''
        };
    }

    onButtonPress() {
        alert("I need Info!!");
    }

    render() {
        return (
            <View style={styles.signUpFormCont}>
                <TextInput
                    style={styles.signUpForm}
                    autoCorrect={false}
                    placeholder='Email'
                    placeholderTextColor='grey'
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.signUpForm}
                    autoCorrect={false}
                    placeholder='Username'
                    placeholderTextColor='grey'
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <TextInput
                    style={styles.signUpForm}
                    autoCorrect={false}
                    placeholder='Password'
                    placeholderTextColor='grey'
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TextInput
                    style={styles.signUpForm}
                    autoCorrect={false}
                    placeholder='Verify Password'
                    placeholderTextColor='grey'
                    onChangeText={(verifyPassword) => this.setState({verifyPassword})}
                    value={this.state.verifyPassword}
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
        color: 'orange',
        borderRadius:10,
        alignItems:'center',
        paddingLeft: 10
    },
    signUpFormCont: {
        height: '30%',
        marginTop: '10%',
        alignItems: 'center'
    },
});
