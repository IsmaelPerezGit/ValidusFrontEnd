import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import firebase from 'firebase';
import MessageBoard from './MessageBoard'
import TeamMemberProgress from './TeamMembersProgress';
import axios from 'axios';
import UserProgress from '../../userProfileScreen/components/UserProgress';

export default class ProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: [],
            userId: [],
            userGoal: []
        }
    }

    componentWillMount() {
        this.getUser();
        //this.date();
        this.getUserGoal();
    }


    getUser() {
        axios.get('http://localhost:3000/users/' + firebase.auth().currentUser.uid)
            .then(res => {
                this.setState({user: res.data});
            });
    }

    getUserGoal() {
        axios.get('http://localhost:3000/goals/')
            .then((res) => {
                res.data.map(goal => {
                    if (goal.user_id == this.state.user.id) {
                        return this.setState({userGoal: goal.days});
                    }
                })
            });
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Team Progress</Text>
                </View>
                <ScrollView>
                    <TeamMemberProgress
                        userGoal={this.state.userGoal}
                        user={this.state.user}
                        completedDays={this.state.completedWktDays}/>
                    <View style={styles.daysLeftCont}>
                        <Text style={styles.daysLeftText}>Days Left: 7</Text>
                    </View>
                    <MessageBoard user={this.state.user}/>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        // height: '100%',
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

