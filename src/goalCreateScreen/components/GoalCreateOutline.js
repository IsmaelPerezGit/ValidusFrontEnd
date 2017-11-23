import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ChooseDays from './ChooseDays';
import TeamSize from './TeamSizeLimit'
import StartEndDateForm from './StartEndDateForm';

export default class GoalCreate extends Component {

    onButtonPress() {
        const { email, password } = this.state;
        alert("This does nothing");
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.viewStyle}>
                    <View style={styles.titleCont}>
                        <Text style={styles.title}>Create Your Goal</Text>
                    </View>
                    <StartEndDateForm/>
                    <ChooseDays/>
                    <View style={styles.teamSizeComponentCont}>
                     <TeamSize/>
                    </View>
                    <View style={styles.createGoalButtonCont}>
                        <TouchableOpacity
                            style={styles.createGoalButton}
                            onPress={() => {Actions.userProfile()}}
                            color='silver'>
                            <Text style={styles.createGoalButtonText}>Create Goal</Text>
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
        height: '140%',
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
    teamSizeComponentCont: {
        height:'30%',
        justifyContent:'center'
    },
    createGoalButtonCont: {
        marginTop: '10%',
        alignItems: 'center',
        // backgroundColor: 'red',
        height: 40
    },
    createGoalButton: {
        backgroundColor: '#222222',
        height: '100%',
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    createGoalButtonText: {
        color: 'silver',
        fontWeight: '600',
        fontSize: 16,
    }
});

