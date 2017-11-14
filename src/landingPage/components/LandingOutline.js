import React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class Title extends Component {


    render() {
        return (
            <View>
                <View style={styles.viewStyle}>
                    <Text style={styles.title}>Validus</Text>
                </View>
                <LoginForm/>
                <SignUpForm/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        // height: '30%',
        textAlign: 'center',
        color: 'black',
        width: '40%',
        // backgroundColor: 'orange'
    },
    viewStyle: {
        backgroundColor: '#222222',
        height: '35%',
        marginTop: '0%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        // shadowColor: '#ff0000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    },
});


