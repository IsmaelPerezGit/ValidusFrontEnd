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
            userId: ''
        };
    }

    componentDidMount() {
        this.getUserId();
        //this.getUser();
        //this.date();
        console.log(`user token for profile page: ${firebase.auth().currentUser.uid}`);
    }

    date() {
        setInterval(() => {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }, 1000)
    };

    //ask question about this
    getUserId() {
        axios.get('http://localhost:3000/users')
            .then(response => {
                const id = response.data.filter(user => {
                    return user.user_token === firebase.auth().currentUser.uid
                })
                this.setState({userId: id})
            });
    }

    getUser() {
        axios.get(`http://localhost:3000/users/${this.state.userId}`)
            .then(res => this.setState({user: res.data}))
    }

    render() {
        console.log(this.state.userId);
        //console.log('this is the user info' + this.state.user);
        return (
            <ScrollView style={styles.scrollCont}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Your Progress</Text>
                </View>
                {!this.state.user ? <Text>loading...</Text> : <UserProgress user={this.state.user}/>}
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