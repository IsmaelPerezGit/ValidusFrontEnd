import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import * as Progress from 'react-native-progress';

export default class UserProfile extends Component {
    state = {
        curTime: null
    };
    componentDidMount() {
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
                <View style={styles.nameCont}>
                    <Text style={styles.nameText}>Name Here</Text>
                </View>
                <View style={styles.progressBarCont}>
                    <Progress.Bar
                        progress={.5}
                        height={20}
                        animated={true}
                        color={'#b21726'}
                        borderWidth={3}/>
                    <View style={styles.daysLeftCont}>
                        <Text style={styles.daysLeftText}>Days Left: 7</Text>
                    </View>
                </View>
                <View style={styles.dateCont}>
                    <Text style={styles.date}>{this.state.curTime}</Text>
                </View>
                <View style={styles.btnCont}>
                    <TouchableOpacity
                        style={styles.completeWorkoutButton}
                        onPress={printThing = () => {
                            alert("This does nothing")
                        }}
                        color='silver'>
                        <Text style={styles.signUpText}>Complete Workout</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.teamPageCreatGoalBtnCont}>
                    <TouchableOpacity
                        style={styles.teamPageButton}
                        onPress={printThing = () => {
                            alert("This does nothing")
                        }}
                        color='silver'>
                        <Text style={styles.signUpText}>Team Page</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.teamPageButton}
                        onPress={printThing = () => {
                            alert("This does nothing")
                        }}
                        color='silver'>
                        <Text style={styles.signUpText}>Create Goal</Text>
                    </TouchableOpacity>
                </View>
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
    nameCont: {
        marginTop: '13%',
        alignItems: 'center',
        flex: 1
    },
    nameText: {
        color: 'silver',
        fontSize: 20,
        fontWeight: '500',
    },
    daysLeftCont: {
        marginTop: 20,
        alignItems: 'center',
        flex: 1
    },
    daysLeftText: {
        color: 'silver',
        fontSize: 20,
        fontWeight: '500',
    },
    progressBarCont: {
        alignItems: 'center',
        marginTop: 10
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
    teamPageCreateGoalBtnCont: {
        height: '5%',
        width: '100%',
        marginTop: '28%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    teamPageButton: {
        marginBottom: 15
    },
});

