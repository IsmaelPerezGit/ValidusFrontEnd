import React, {Component} from 'react';
import firebase from 'firebase';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import * as Progress from 'react-native-progress';
import axios from 'axios';
import UserProgress from './UserProgress';
import TeamAndGoalBtns from './TeamAndGoalBtns';

export default class UserProfile extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        curTime: null,
        users: [],
        user_token: '',
    };

    componentWillMount() {
        axios.get('http://localhost:3000/users')
            .then(response => this.setState({users: response.data[0].username}));

        console.log(`user token for profile page: ${firebase.auth().currentUser.uid}`);

        setInterval(() => {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }, 1000)
    }

    render() {
        return (
            <ScrollView style={styles.scrollCont}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Your Progress</Text>
                </View>
                <UserProgress username={this.state.users}/>
                <View style={styles.dateCont}>
                    <Text style={styles.date}>{this.state.curTime}</Text>
                </View>
                <View style={styles.btnCont}>
                    <TouchableOpacity
                        style={styles.completeWorkoutButton}
                        onPress={() => {
                            alert("This does nothing")
                        }}
                        color='silver'>
                        <Text style={styles.signUpText}>Complete Workout</Text>
                    </TouchableOpacity>
                </View>
                <TeamAndGoalBtns/>
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