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
        this.props.toggleSun(this.state.Sun)
    }
    onToggleMon() {
        this.props.toggleMon(this.state.Mon)
    }
    onToggleTues() {
        this.props.toggleTues(this.state.Tues)
    }
    onToggleWed() {
        this.props.toggleWed(this.state.Wed)
    }
    onToggleThurs() {
        this.props.toggleThurs(this.state.Thurs)
    }
    onToggleFri() {
        this.props.toggleFri(this.state.Fri)
    }
    onToggleSat() {
        this.props.toggleSat(this.state.Sat)
    }

    render() {
        return (
            <View style={styles.chooseDaysCont}>
                <Text style={styles.text}>Choose your workout days</Text>
                <View style={styles.checkBoxCont}>
                    <CheckBox
                        label='Sunday'
                        checked={this.state.Sun}
                        onChange={this.onToggleSun.bind(this)}
                    />
                    <CheckBox
                        label='Monday'
                        checked={this.state.Mon}
                        onChange={this.onToggleMon.bind(this)}
                    />
                    <CheckBox
                        label='Tuesday'
                        checked={this.state.Tues}
                        onChange={this.onToggleTues.bind(this)}
                    />
                    <CheckBox
                        label='Wednesday'
                        checked={this.state.Wed}
                        onChange={this.onToggleWed.bind(this)}
                    />
                    <CheckBox
                        label='Thursday'
                        checked={this.state.Thurs}
                        onChange={this.onToggleThurs.bind(this)}
                    />
                    <CheckBox
                        label='Friday'
                        checked={this.state.Fri}
                        onChange={this.onToggleFri.bind(this)}
                    />
                    <CheckBox
                        label='Saturday'
                        checked={this.state.Sat}
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
