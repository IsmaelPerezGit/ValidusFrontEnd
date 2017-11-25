import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

const TeamAndGoalBtns = () => {
    return (
        <View style={styles.teamPageCreateGoalBtnCont}>
            <TouchableOpacity
                style={styles.teamPageButton}
                onPress={() => {
                    Actions.team()
                }}
                color='silver'>
                <Text style={styles.signUpText}>Team Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.teamPageButton}
                onPress={() => {
                    Actions.goalCreate()
                }}
                color='silver'>
                <Text style={styles.signUpText}>Create Goal</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TeamAndGoalBtns

const styles = StyleSheet.create({
    signUpText: {
        color: 'silver',
        fontWeight: '600',
        fontSize: 16,
    },
    teamPageCreateGoalBtnCont: {
        height: '5%',
        width: '100%',
        marginTop: '28%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    teamPageButton: {
        marginBottom: 15
    },
})