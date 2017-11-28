import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet} from 'react-native';
import CheckBox from 'react-native-checkbox';

class ChooseDays extends Component {
    constructor (props) {
        super(props);
        this.state = {
            weeks: 0,
        }
    }

    onToggleSun() {
        this.props.toggleSun(this.state.sun)
    }
    onToggleMon() {
        this.props.toggleMon(this.state.mon)
    }
    onToggleTues() {
        this.props.toggleTues(this.state.tues)
    }
    onToggleWed() {
        this.props.toggleWed(this.state.wed)
    }
    onToggleThurs() {
        this.props.toggleThurs(this.state.thurs)
    }
    onToggleFri() {
        this.props.toggleFri(this.state.fri)
    }
    onToggleSat() {
        this.props.toggleSat(this.state.sat)
    }

    render() {
        return (
            <View style={styles.chooseDaysCont}>
                <Text style={styles.text}>Choose your workout days</Text>
                <View style={styles.checkBoxCont}>
                    <CheckBox
                        label='Sunday'
                        checked={this.state.sun}
                        onChange={this.onToggleSun.bind(this)}
                    />
                    <CheckBox
                        label='Monday'
                        checked={this.state.mon}
                        onChange={this.onToggleMon.bind(this)}
                    />
                    <CheckBox
                        label='Tuesday'
                        checked={this.state.tues}
                        onChange={this.onToggleTues.bind(this)}
                    />
                    <CheckBox
                        label='Wednesday'
                        checked={this.state.wed}
                        onChange={this.onToggleWed.bind(this)}
                    />
                    <CheckBox
                        label='Thursday'
                        checked={this.state.thurs}
                        onChange={this.onToggleThurs.bind(this)}
                    />
                    <CheckBox
                        label='Friday'
                        checked={this.state.fri}
                        onChange={this.onToggleFri.bind(this)}
                    />
                    <CheckBox
                        label='Saturday'
                        checked={this.state.sat}
                        onChange={this.onToggleSat.bind(this)}
                    />
                </View>
            </View>
        );
    }
};

export default ChooseDays;

const styles = StyleSheet.create({
    chooseDaysCont: {
        justifyContent:'center',
        alignItems:'center'
    },
    checkBoxCont: {
        marginTop: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#b21726',
        marginTop: 30
    },
});
