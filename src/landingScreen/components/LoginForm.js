import React, {Component} from 'react';
import firebase from 'firebase';
import {
    TextInput,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import Spinner from './Spinner';


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
            user_token:''
        };
    }

    onButtonPress() {
        const {email, password} = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))

    }

    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false})
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
            user_token: firebase.auth().currentUser.uid
        });
        console.log(`this is the user token: ${firebase.auth().currentUser.uid}`)
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner/>
        }
        return (
            <Button
                onPress={this.onButtonPress.bind(this)}
                title="Submit"
                color='orange'/>
        );
    }

    render() {
        return (
            <View>
                <View style={styles.signInFormCont}>
                    <TextInput
                        autoCorrect={false}
                        placeholder='Email'
                        placeholderTextColor='grey'
                        style={styles.signInForm}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}/>
                    <TextInput
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor='grey'
                        style={styles.signInForm}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}/>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    {this.renderButton()}
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
        height: '20%',
        marginTop: '10%',
        alignItems: 'center'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }

});


