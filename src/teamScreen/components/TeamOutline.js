import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet} from 'react-native';

const Team = () => {
    const { title, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={title}>Team</Text>
        </View>
    );
};

export default Team;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        width: '40%',
        // backgroundColor: 'orange'
    },
    viewStyle: {
        height: '10%',
        marginTop: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        // shadowColor: '#ff0000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    }
});
