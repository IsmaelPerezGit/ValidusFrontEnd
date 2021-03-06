import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';


export default SignUpButton = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Not A Member?</Text>
            <TouchableOpacity
                style={styles.signUpButton}
                onPress={ () => {
                    Actions.signUp()
                }}
                color='silver'>
            <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        height: '10%',
        marginTop: '23%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative'
    },
    text: {
        color: 'silver'
    },
    signUpButton: {
        backgroundColor: '#222222',
        width: '50%',
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    signUpText: {
        color: 'silver',
        fontWeight: '600',
        fontSize: 16,
    }
});


