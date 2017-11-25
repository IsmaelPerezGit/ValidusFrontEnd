import React, {Component} from 'react';
import {
    TextInput,
    Button,
    View,
    StyleSheet
} from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            verifyPassword: '',
            teamId: 0
        };
    }

    onButtonPress() {
        const {email, username, password, verifyPassword, teamId} = this.state;

        if (email === '' || username === '' || password === '') {
            return alert('Must fill in all fields')
        } else if (password !== verifyPassword) {
            return alert('Passwords do not match');
        } else if (password.length < 6) {
            return alert('password must be at least 6 characters long')
        }
        return (
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => axios.post('http://localhost:3000/users/new', {
                    email: email,
                    username: username,
                    user_token: firebase.auth().currentUser.uid,
                    team_id: teamId
                }))
                .then(() => Actions.createGoalOrJoin()))

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
                    value={this.state.email}/>
                <TextInput
                    style={styles.signUpForm}
                    autoCorrect={false}
                    placeholder='Username'
                    placeholderTextColor='grey'
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}/>
                <TextInput
                    style={styles.signUpForm}
                    secureTextEntry={true}
                    autoCorrect={false}
                    placeholder='Password'
                    placeholderTextColor='grey'
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}/>
                <TextInput
                    style={styles.signUpForm}
                    secureTextEntry={true}
                    autoCorrect={false}
                    placeholder='Verify Password'
                    placeholderTextColor='grey'
                    onChangeText={(verifyPassword) => this.setState({verifyPassword})}
                    value={this.state.verifyPassword}/>
                <View style={styles.btnCont}>
                    <Button
                        onPress={() => this.onButtonPress()}
                        title="Submit"
                        color="orange"/>
                </View>
            </View>
        );
    }
}

export default SignUpForm;

const styles = StyleSheet.create({
    signUpFormCont: {
        height: '40%',
        marginTop: '10%',
        alignItems: 'center',
    },
    signUpForm: {
        height: 40,
        width: '85%',
        borderColor: 'black',
        backgroundColor: '#222222',
        borderWidth: 1,
        marginTop: '5%',
        color: 'orange',
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 10,
    },
    btnCont: {
        marginTop: '5%'
    }
});
