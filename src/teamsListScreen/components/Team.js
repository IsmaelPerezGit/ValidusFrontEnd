import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Team = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardTextCont}>
                <Text style={styles.cardHeader}>Team Name: Tornadoes</Text>
                <Text style={styles.cardHeader}>Goal: Bills Goal</Text>
                <Text style={styles.cardHeader}>Open Slots: 3</Text>
                <Text style={styles.cardHeader}>Start Date: 12/12/2017</Text>
                <Text style={styles.cardHeader}>End Date: 01/01/2018</Text>
            </View>
            <View style={styles.btnCont}>
                <TouchableOpacity
                    style={styles.JoinOrViewButton}
                    onPress={printThing = () => {
                        alert("This does nothing")
                    }}
                    color='silver'>
                    <Text style={styles.buttonText}>Join Team</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.JoinOrViewButton}
                    onPress={printThing = () => {
                        alert("This does nothing")
                    }}
                    color='silver'>
                    <Text style={styles.buttonText}>View Team</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Team;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        borderWidth: 5,
        borderRadius: 1,
        borderColor: '#b21726',
        borderBottomWidth: 0,
        shadowColor: '#b21726',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: 'silver',
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
    },
    cardHeader: {
        marginTop: 5,
        color: "black",
        fontWeight: '600'
    },
    cardTextCont: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
    },
    btnCont: {
        height: '100%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        marginTop: 5,
        marginBottom: 5
    },
    JoinOrViewButton: {
        backgroundColor: '#222222',
        width: '80%',
        height: '28%',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    buttonText: {
        color: 'silver'
    }
});
