import React, {Component} from 'react';

import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import ChooseDays from './ChooseDays';
import TeamSize from './TeamSizeLimit'
import StartEndDateForm from './StartEndDateForm';

export default class GoalCreate extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.viewStyle}>
                    <View style={styles.titleCont}>
                        <Text style={styles.title}>Create Your Goal</Text>
                    </View>
                    <StartEndDateForm/>
                    <ChooseDays/>
                    <TeamSize/>
                    <View style={styles.signUpButtonCont}>
                        <TouchableOpacity
                            style={styles.signUpButton}
                            onPress={printThing = () => {
                                alert("This does nothing")
                            }}
                            color='silver'>
                            <Text style={styles.signUpText}>Create Goal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'black',
        paddingTop: 10,
        position: 'relative',
        flex: 1
    },
    titleCont: {
        alignItems:'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        width: '80%',
    },
    signUpButtonCont: {
        alignItems: 'center',
        backgroundColor: 'red',
        height: 40
    },
    signUpButton: {
        backgroundColor: '#222222',
        height: '100%',
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText: {
        color: 'silver',
        fontWeight: '600',
        fontSize: 16,
    }
});

