import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

class UserProgress extends Component{
    constructor(props) {
        super(props);
        this.state = {
            avg: 0
        }
    }

    render() {
        return (
            <View>
                <View style={styles.nameCont}>
                    <Text style={styles.nameText}>
                        {this.props.user.username}
                    </Text>
                </View>
                <View style={styles.progressBarCont}>
                    <Progress.Bar
                        progress={.5}
                        height={20}
                        animated={true}
                        color={'#b21726'}
                        borderWidth={3}/>
                    <View style={styles.daysLeftCont}>
                        <Text style={styles.daysLeftText}>Days Left: {this.props.userGoal}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default UserProgress;

const styles = StyleSheet.create({
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
});