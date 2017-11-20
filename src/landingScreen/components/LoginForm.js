import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onButtonPress() {
        const { email, password } = this.state;
        alert("This does nothing");
    }

    render() {
        return (
            <View>
                <View style={styles.signInFormCont}>
                    <TextInput
                        autoCorrect={false}
                        placeholder='Email'
                        placeholderTextColor='white'
                        style={styles.signInForm}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}/>
                    <TextInput
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor='white'
                        style={styles.signInForm}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}/>
                    <Button
                        onPress={() => this.onButtonPress()}
                        title="Submit"
                        color='silver'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    signInForm: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 40,
        width: '85%',
        borderColor: 'black',
        backgroundColor: '#222222',
        borderWidth: 1,
        marginTop: '5%',
        color: 'silver',
        borderRadius: 10,
        alignItems: 'center'
    },
    signInFormCont: {
        height: '30%',
        marginTop: '10%',
        alignItems: 'center'
    }
});


