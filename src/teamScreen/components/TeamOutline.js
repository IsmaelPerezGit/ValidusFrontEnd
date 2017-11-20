import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import MessageBoard from './MessageBoard'
import TeamMemberProgress from './TeamMembersProgress';

export default class ProfileEdit extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Team Progress</Text>
                </View>
                <ScrollView>
                    <TeamMemberProgress/>
                    <View style={styles.daysLeftCont}>
                        <Text style={styles.daysLeftText}>Days Left: 7</Text>
                    </View>
                    <MessageBoard/>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        height: '100%',
        paddingTop: '10%',
        elevation: 3,
        position: 'relative',
        flex: 1
    },
    titleCont: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 1,
        marginBottom: '10%'
    },
    title: {
        fontSize: 40,
        alignItems: 'center',
        textAlign: 'center',
        color: '#b21726',
        width: '100%',
    },
    daysLeftCont: {
        alignItems: 'center',
    },
    daysLeftText: {
        color: '#b21726',
        fontWeight: '600',
        fontSize: 20,
    },
});

