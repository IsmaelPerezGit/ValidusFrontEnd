import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';


export default SignUpForm = () => {

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text}>Not A Member?</Text>
            <Button
                style={styles.thisBtn}
                onPress={printThing = () => {
                    alert("This does nothing")
                }}
                title="Sign Up"
                color='silver'
            />
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
    }
});


