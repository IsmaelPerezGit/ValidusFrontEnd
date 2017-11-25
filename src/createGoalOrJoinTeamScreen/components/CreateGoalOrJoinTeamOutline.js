import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class CreateGoalOrJoin extends Component {

    onCreateButtonPress() {
       // const { email, password } = this.state;
       Actions.goalCreate();
    }

    onJoinButtonPress() {
        Actions.teamsList();
    }

    render () {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.title}>Choose your fate</Text>
                <View style={styles.btnCont}>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => this.onCreateButtonPress()}
                        color='silver'>
                        <Text style={styles.signUpText}>Create Goal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => this.onJoinButtonPress()}
                        color='silver'>
                        <Text style={styles.signUpText}>Choose Team</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        height: '48%',
        paddingTop: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        width: '70%',
    },
    btnCont: {
        height: '30%',
        flexDirection: 'row',
        width: '100%',
        marginTop: '10%'
    },
    signUpButton: {
        backgroundColor: '#222222',
        width: '50%',
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 13,
        marginRight: 13,
    },
    signUpText: {
        color: 'silver',
        fontWeight: '600',
        fontSize: 16,
    }
});


