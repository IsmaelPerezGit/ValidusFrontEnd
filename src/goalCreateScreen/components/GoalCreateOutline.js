import React, {Component} from 'react';

import {
    Text,
    View,
    ScrollView,
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
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'black',
        paddingTop: 10,
        height: '100%',
        elevation: 3,
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
});

