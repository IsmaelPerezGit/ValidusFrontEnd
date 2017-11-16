import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const TeamList = () => {
    return (
            <View style={styles.viewStyle}>
                <Text style={styles.title}>Choose a Team</Text>
                <ScrollView>
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
                                style={styles.completeWorkoutButton}
                                onPress={printThing = () => {
                                    alert("This does nothing")
                                }}
                                color='silver'>
                                <Text style={styles.buttonText}>Join Team</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.completeWorkoutButton}
                                onPress={printThing = () => {
                                    alert("This does nothing")
                                }}
                                color='silver'>
                                <Text style={styles.buttonText}>View Team</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
    );
};
export default TeamList;

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        marginBottom: '5%'
    },
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
        // marginTop: '5%',
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
    completeWorkoutButton: {
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
