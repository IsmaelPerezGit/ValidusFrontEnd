import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Picker
} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import ChooseDays from './ChooseDays';
import TeamSize from './TeamSizeLimit'
import StartDateForm from './StartDateForm';
import DatePicker from 'react-native-datepicker'

export default class GoalCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '',
            weeks: '',
            sun: false,
            mon: false,
            tues: false,
            wed: false,
            thurs: false,
            fri: false,
            sat: false,
            teamSize: '',
            startDate: '',
            totalDays: '',
            userId: 0,
            goalId: 0
        }
    }

    componentWillMount() {
        this.getUser();
        this.getGoal();
    }

    getUser() {
        axios.get('http://localhost:3000/users/' + firebase.auth().currentUser.uid)
            .then(res => {
                this.setState({userId: res.data.id});
            })
    }

    getGoal() {
        axios.get('http://localhost:3000/goals/' + this.state.userId)
            .then(res => {
                this.setState({goalId: res.data[0].id});
            })
    }

    onTogglesun() {
        this.setState({sun: !this.state.sun})
    }

    onTogglemon() {
        this.setState({mon: !this.state.mon})
    }

    onToggletues() {
        this.setState({tues: !this.state.tues})
    }

    onTogglewed() {
        this.setState({wed: !this.state.wed})
    }

    onTogglethurs() {
        this.setState({thurs: !this.state.thurs})
    }

    onTogglefri() {
        this.setState({fri: !this.state.fri})
    }

    onTogglesat() {
        this.setState({sat: !this.state.sat})
    }

    onButtonPress() {
        const {target, weeks, sun, mon, tues, wed, thurs, fri, sat, teamSize, startDate, userId} = this.state;
        return (axios.post('http://localhost:3000/goals/new', {
            target: target,
            start_date: startDate,
            weeks: weeks,
            sun: sun,
            mon: mon,
            tues: tues,
            wed: wed,
            thurs: thurs,
            fri: fri,
            sat: sat,
            team_size: teamSize,
            user_id: userId,
        }))
            .then(() => {
            const {userId, goalId} = this.state;
                axios.post('http://localhost:3000/teams/new', {
                    user_id: userId,
                    goal_id: goalId
                })
            })
            .then(() => Actions.userProfile());
    }

    render() {
        console.log('this is all state: ' + this.state);
        console.log('this is the user id: ' + this.state.userId);
        console.log('this is the goal id: ' + this.state.goalId);

        return (
            <ScrollView>
                <View style={styles.viewStyle}>
                    <View style={styles.titleCont}>
                        <Text style={styles.title}>Create Your Goal</Text>
                    </View>
                    <View style={styles.formCont}>
                        <TextInput
                            placeholder="Enter Goal: (example:'Run 4 miles')"
                            placeholderTextColor='grey'
                            style={styles.weeksInput}
                            value={this.state.target}
                            onChangeText={(target) => this.setState({target})}/>
                        <View style={styles.datePickerCont}>
                            <DatePicker
                                style={styles.datePicker}
                                date={this.state.startDate}
                                mode="date"
                                placeholder="Start Date"
                                format="MM-DD-YYYY"
                                minDate="12-01-2017"
                                maxDate="02-01-2018"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 5
                                    },
                                    dateInput: {
                                        marginLeft: 0,
                                    }
                                }}
                                onDateChange={(date) => {
                                    this.setState({startDate: date})
                                }}/>
                        </View>
                        <TextInput
                            placeholder='how many weeks'
                            placeholderTextColor='grey'
                            style={styles.weeksInput}
                            value={this.state.weeks}
                            onChangeText={(weeks) => this.setState({weeks})}/>
                    </View>
                    <ChooseDays
                        togglesun={this.onTogglesun.bind(this)}
                        togglemon={this.onTogglemon.bind(this)}
                        toggletues={this.onToggletues.bind(this)}
                        togglewed={this.onTogglewed.bind(this)}
                        togglethurs={this.onTogglethurs.bind(this)}
                        togglefri={this.onTogglefri.bind(this)}
                        togglesat={this.onTogglesat.bind(this)}/>
                    <View style={styles.teamSizeComponentCont}>
                        <View>
                            <View style={styles.sizeLimitTextCont}>
                                <Text style={styles.text}>Team Size Limit</Text>
                            </View>
                            <View style={styles.pickerCont}>
                                <Picker
                                    style={styles.picker}
                                    selectedValue={this.state.teamSize}
                                    onValueChange={(itemValue, itemIndex) => this.setState({teamSize: itemValue})}>
                                    <Picker.Item
                                        color='white'
                                        label='1'
                                        value='1'/>
                                    <Picker.Item
                                        color='white'
                                        label='2'
                                        value='2'/>
                                    <Picker.Item
                                        color='white'
                                        label='3'
                                        value='3'/>
                                    <Picker.Item
                                        color='white'
                                        label='4'
                                        value='4'/>
                                    <Picker.Item
                                        color='white'
                                        label='5'
                                        value='5'/>
                                    <Picker.Item
                                        color='white'
                                        label='6'
                                        value='6'/>
                                    <Picker.Item
                                        color='white'
                                        label='7'
                                        value='7'/>
                                    <Picker.Item
                                        color='white'
                                        label='8'
                                        value='8'/>
                                    <Picker.Item
                                        color='white'
                                        label='9'
                                        value='9'/>
                                    <Picker.Item
                                        color='white'
                                        label='10'
                                        value='10'/>
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <View style={styles.createGoalButtonCont}>
                        <TouchableOpacity
                            style={styles.createGoalButton}
                            onPress={() => {
                                this.onButtonPress()
                            }}
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
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        width: '80%',
    },
    teamSizeComponentCont: {
        height: '30%',
        justifyContent: 'center'
    },
    createGoalButtonCont: {
        marginTop: '10%',
        alignItems: 'center',
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
    },
    formCont: {
        alignItems: 'center'
    },
    datePickerCont: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    datePicker: {
        width: 310,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: '#222222',
        borderRadius: 1
    },
    weeksInput: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 40,
        width: '85%',
        backgroundColor: '#222222',
        borderWidth: 1,
        marginTop: '5%',
        color: 'silver',
        borderRadius: 10,
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    sizeLimitTextCont: {
        height: '50%',
        alignItems: 'center'
    },
    picker: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#b21726',
        marginTop: 30
    },
    pickerCont: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
    }
});