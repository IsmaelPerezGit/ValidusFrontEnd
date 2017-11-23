import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import SignUpForm from './SignUpForm';

export default class Signup extends Component {

    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <SignUpForm/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'black',
        height: '60%',
        paddingTop: '20%',
        elevation: 3,
        position: 'relative'
    },
    titleCont: {
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        width: '40%',
    },
});

