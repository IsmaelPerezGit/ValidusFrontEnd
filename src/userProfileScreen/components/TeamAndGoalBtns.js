import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

class TeamAndGoalBtns extends Component{
    constructor(props){
        super(props)
    }



    render(props) {

        renderButton=()=>{
            if(this.props.userGoal === 0) {
                return (
                    <TouchableOpacity
                        disabled={this.buttonDisable}
                        style={styles.teamPageButton}
                        onPress={() => {
                            Actions.goalCreate()
                        }}
                        color='silver'>
                        <Text style={styles.signUpText}>Create Goal</Text>
                    </TouchableOpacity>
                )
            }
        };

        return (
            <View style={styles.teamPageCreateGoalBtnCont}>
                <TouchableOpacity
                    style={styles.teamPageButton}
                    onPress={() => {
                        Actions.team()
                    }}
                    color='silver'>
                    <Text style={styles.signUpText}>Team Page</Text>
                </TouchableOpacity>
                {renderButton()}
            </View>
        );
    }
};

export default TeamAndGoalBtns

const styles = StyleSheet.create({
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
})