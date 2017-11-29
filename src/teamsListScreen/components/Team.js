import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Team extends Component {

    constructor(props) {
        super();
        this.state = {
            teams: []
        };
    }


    componentWillMount() {
        axios.get('http://localhost:3000/goals')
            .then(res => {
                this.setState({teams: res.data})
            });
    }

    render() {
        renderTeams =()=>  {
            return this.state.teams.map((team) => {
                return(
                    <View key={team.id} style={styles.cardContainer}>
                        <View style={styles.cardTextCont}>
                            <Text style={styles.cardHeader}>Team Target: {team.target}</Text>
                            <Text style={styles.cardHeader}>Start Date: {team.start_date}</Text>
                            <Text style={styles.cardHeader}>Weeks: {team.weeks}</Text>
                            <Text style={styles.cardHeader}>Open Slots: 3</Text>
                            <Text style={styles.cardHeader}>Days: Mon, Wed, Fri</Text>
                        </View>
                        <View style={styles.btnCont}>
                            <TouchableOpacity
                                style={styles.JoinOrViewButton}
                                onPress={printThing = () => {
                                    alert("Successfully joined team")
                                }}
                                color='silver'>
                                <Text style={styles.buttonText}>Join Team</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.JoinOrViewButton}
                                onPress={ () => {Actions.team()}
                                }
                                color='silver'>
                                <Text style={styles.buttonText}>View Team</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }

        return (
            <View >
                {renderTeams()}
            </View>
        );
    }
}

export default Team;

const styles = StyleSheet.create({
    cardContainer: {
        flex:1,
        flexDirection: 'row',
        borderWidth: 5,
        borderRadius: 1,
        borderColor: '#b21726',
        shadowColor: '#b21726',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        backgroundColor: 'silver',
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginBottom:20,
        alignItems: 'center',
    },
    cardHeader: {
        marginTop: 5,
        color: "black",
        fontWeight: '600'
    },
    cardTextCont: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
    },
    btnCont: {
        height: '100%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        marginTop: 5,
        marginBottom: 5
    },
    JoinOrViewButton: {
        backgroundColor: '#222222',
        width: '80%',
        height: '28%',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    buttonText: {
        color: 'silver'
    }
});
