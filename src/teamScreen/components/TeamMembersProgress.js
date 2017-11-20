import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

const TeamMemberProgress = () => {
    return (
        <View style={styles.teamProgressCont}>
            <View style={styles.teamMemberCont}>
                <View style={styles.nameCont}>
                    <Text style={styles.nameText}>Name Here</Text>
                </View>
                <View style={styles.progressBarCont}>
                    <Progress.Bar
                        progress={.25}
                        height={20}
                        animated={true}
                        color={'#b21726'}
                        borderWidth={3}/>
                </View>
            </View>
        </View>
    );
};

export default TeamMemberProgress;

const styles = StyleSheet.create({
    teamProgressCont: {
        width: '100%',
        height: '100%',
        marginTop: 10,
    },
    teamMemberCont: {
        width: '100%',
        height: '25%',
    },
    nameCont: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        color: 'silver',
        fontSize: 20,
        fontWeight: '500',
    },
    progressBarCont: {
        alignItems: 'center',
        margin: 2
    },
});
