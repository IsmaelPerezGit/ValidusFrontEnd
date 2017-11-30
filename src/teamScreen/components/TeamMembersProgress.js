import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

class TeamMemberProgress extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.teamProgressCont}>
                <View style={styles.teamMemberCont}>
                    <View style={styles.nameCont}>
                        <Text style={styles.nameText}>{this.props.user.username}</Text>
                    </View>
                    <View style={styles.progressBarCont}>
                        <Progress.Bar
                            progress={.25}
                            height={20}
                            animated={true}
                            color={'#b21726'}
                            borderWidth={3}/>
                    </View>
                </View>
                <View style={styles.teamMemberCont}>
                    <View style={styles.nameCont}>
                        <Text style={styles.nameText}>John</Text>
                    </View>
                    <View style={styles.progressBarCont}>
                        <Progress.Bar
                            progress={.0}
                            height={20}
                            animated={true}
                            color={'#b21726'}
                            borderWidth={3}/>
                    </View>
                </View>
                <View style={styles.teamMemberCont}>
                    <View style={styles.nameCont}>
                        <Text style={styles.nameText}>Jennifer</Text>
                    </View>
                    <View style={styles.progressBarCont}>
                        <Progress.Bar
                            progress={.0}
                            height={20}
                            animated={true}
                            color={'#b21726'}
                            borderWidth={3}/>
                    </View>
                </View>
            </View>



        );
    }
}

export default TeamMemberProgress;

const styles = StyleSheet.create({
    teamProgressCont: {
        width: '100%',
        height: '80%',
        marginTop: 10,
    },
    teamMemberCont: {
        width: '100%',
        height: '25%',
    },
    nameCont: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        color: 'silver',
        fontSize: 20,
        fontWeight: '500',
    },
    progressBarCont: {
        alignItems: 'center',
        margin: 2
    },
});
