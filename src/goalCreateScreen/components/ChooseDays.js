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

    onTogglesun() {
        this.props.togglesun(this.state.sun)
    }
    onTogglemon() {
        this.props.togglemon(this.state.mon)
    }
    onToggletues() {
        this.props.toggletues(this.state.tues)
    }
    onTogglewed() {
        this.props.togglewed(this.state.wed)
    }
    onTogglethurs() {
        this.props.togglethurs(this.state.thurs)
    }
    onTogglefri() {
        this.props.togglefri(this.state.fri)
    }
    onTogglesat() {
        this.props.togglesat(this.state.sat)
    }

    render() {
        return (
            <View style={styles.chooseDaysCont}>
                <Text style={styles.text}>Choose your workout days</Text>
                <View style={styles.checkBoxCont}>
                    <CheckBox
                        label='sunday'
                        checked={this.state.sun}
                        onChange={this.onTogglesun.bind(this)}
                    />
                    <CheckBox
                        label='monday'
                        checked={this.state.mon}
                        onChange={this.onTogglemon.bind(this)}
                    />
                    <CheckBox
                        label='tuesday'
                        checked={this.state.tues}
                        onChange={this.onToggletues.bind(this)}
                    />
                    <CheckBox
                        label='wednesday'
                        checked={this.state.wed}
                        onChange={this.onTogglewed.bind(this)}
                    />
                    <CheckBox
                        label='thursday'
                        checked={this.state.thurs}
                        onChange={this.onTogglethurs.bind(this)}
                    />
                    <CheckBox
                        label='friday'
                        checked={this.state.fri}
                        onChange={this.onTogglefri.bind(this)}
                    />
                    <CheckBox
                        label='saturday'
                        checked={this.state.sat}
                        onChange={this.onTogglesat.bind(this)}
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
