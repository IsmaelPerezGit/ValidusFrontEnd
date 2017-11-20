import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import Team from './Team';

const TeamList = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.title}>Choose a Team</Text>
            <ScrollView>
                <Team/>
            </ScrollView>
        </View>
    );
};
export default TeamList;

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        height: '80%',
        marginTop: '5%',
        alignItems: 'center',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        marginBottom: '5%'
    },
});
