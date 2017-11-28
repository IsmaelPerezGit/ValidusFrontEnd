import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import axios from 'axios';
import Team from './Team';

class TeamList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: '',
            startDate: '',
            weeks: 0,
            openSlots: 0,
            days: '',
            teams: [],
            goals: []
        }
    }

    componentWillMount() {
        axios.get('http://localhost:3000/goals')
            .then(res => {
                console.log('this is thingk' + res.data)
                this.setState({teams: res.data})
            });
    }


    render() {

        renderTeams =()=>  {
           return this.state.teams.map((team) => {
                return(
                    <Text style={styles.title}>{team.target}</Text>
                )
            })
        }

        console.log(this.state.teams)

        return (
            <View style={styles.viewStyle}>
                <Text style={styles.title}>Choose a Team</Text>
                <ScrollView>
                    <Team/>
                </ScrollView>
            </View>
        );
    }
};
export default TeamList;

const styles = StyleSheet.create({
    textCont: {
        backgroundColor:'red',
        height: '20%',
        width: '20%'
    },
    viewStyle: {
        flex: 1,
        height: '80%',
        marginTop: '5%',
        alignItems: 'center',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        marginBottom: '5%'
    },
});
