import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';


import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class Landing extends Component {
    render() {
        return (
            <View>
                <Image style={styles.cycleImage} source={{uri: '/Users/ismaelperez/Workspace/Javascript/ValidusProject/ValidusFrontEnd/src/assets/images/ValidusBikeBg.jpeg'}}/>
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
    },
    viewStyle: {
        backgroundColor: 'black',
        height: '20%',
        // marginTop: '0%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative'
    },
    cycleImage: {
        height: '14%'
    }
});


