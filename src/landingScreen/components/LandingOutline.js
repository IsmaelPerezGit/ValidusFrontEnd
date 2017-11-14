import React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';


import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class Title extends Component {


    render() {
        return (
            <View>
                <Image style={styles.imagething} source={{uri: '/Users/ismaelperez/Workspace/Javascript/ValidusProject/ValidusFrontEnd/src/assets/images/ValidusBikeBg.jpeg'}}/>
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
        color: '#b21726',
        width: '40%',
        // backgroundColor: 'orange'
    },
    viewStyle: {
        backgroundColor: 'black',
        height: '20%',
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
    imagething: {
        height: '12%'
    }
});


