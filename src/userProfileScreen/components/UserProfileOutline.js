import React, {Component} from 'react';
import firebase from 'firebase';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import axios from 'axios';
import UserProgress from './UserProgress';
import TeamAndGoalBtns from './TeamAndGoalBtns';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: null,
            user_token: '',
            user: [],
            userId: [],
            userGoal: [],
            numDaysLeft:0,
            completedWktDays: 0,
            avg: 0
        };
    }

    componentWillMount() {
        this.getUser();
        //this.date();
        this.getUserGoal();
        this.getUserDaysLeft();
    }

    date() {
        setInterval(() => {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }, 1000)
    };

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

    getUserDaysLeft() {
        axios.get('http://localhost:3000/goals/')
            .then((res) => {
                res.data.map(goal => {
                    if (goal.user_id == this.state.user.id) {
                        return this.setState({numDaysLeft: goal.days});
                    }
                })
            });
    }

    getAverage() {
        if (this.state.numDaysLeft !== 0) {
            return this.state.completedWktDays / this.state.numDaysLeft
        }
    }

    handleCompleteWorkoutPress() {
        this.setState({
            userGoal: this.state.userGoal - 1,
            completedWktDays:this.state.completedWktDays + 1,
        })
        this.getAverage()
    }

    render() {
        console.log('this is the avg: ' + this.getAverage())
        return (
            <ScrollView style={styles.scrollCont}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Your Progress</Text>
                </View>
                {!this.state.user ? <Text>loading...</Text> :
                    <UserProgress
                        avg={this.getAverage()}
                        userGoal={this.state.userGoal}
                        user={this.state.user}
                        completedDays={this.state.completedWktDays}
                    />}
                <View style={styles.dateCont}>
                    <Text style={styles.date}>{this.state.curTime}</Text>
                </View>
                <View style={styles.btnCont}>
                    <TouchableOpacity
                        style={styles.completeWorkoutButton}
                        onPress={() => {
                            this.handleCompleteWorkoutPress();
                            alert("Your doing great! Keep it up!");
                        }}
                        color='silver'>
                        <Text style={styles.signUpText}>Complete Workout</Text>
                    </TouchableOpacity>
                </View>
                <TeamAndGoalBtns userGoal={this.state.userGoal}/>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    scrollCont: {
        flex: 1,
    },
    titleCont: {
        marginTop: '13%',
        alignItems: 'center',
        elevation: 3,
        flex: 1
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        width: '40%',
    },
    btnCont: {
        height: '8%',
        width: '100%',
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    text: {
        color: 'silver'
    },
    dateCont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '13%',
        flex: 1
    },
    date: {
        fontSize: 20,
        fontWeight: '600',
        height: 20,
        color: '#b21726',
    },
    completeWorkoutButton: {
        backgroundColor: '#222222',
        width: '80%',
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    signUpText: {
        color: 'silver',
        fontWeight: '600',
        fontSize: 16,
    },
});