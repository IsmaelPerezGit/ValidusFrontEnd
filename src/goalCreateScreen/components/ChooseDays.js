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
            sun:false,
            mon:false,
            tues:false,
            wed:false,
            thurs:false,
            fri:false,
            sat:false,
        }
    }

    render() {
        return (
            <View style={styles.chooseDaysCont}>
                <Text style={styles.text}>Choose your workout days</Text>
                <View style={styles.checkBoxCont}>
                    <CheckBox
                        label='Sunday'
                        checked={this.state.sun}
                        onChange={(sun) => this.setState({sun:!sun})}
                    />
                    <CheckBox
                        label='Monday'
                        checked={this.state.mon}
                        onChange={(mon) => this.setState({mon:!mon})}
                    />
                    <CheckBox
                        label='Tuesday'
                        checked={this.state.tues}
                        onChange={(tues) => this.setState({tues:!tues})}
                    />
                    <CheckBox
                        label='Wednesday'
                        checked={this.state.wed}
                        onChange={(wed) => this.setState({wed:!wed})}
                    />
                    <CheckBox
                        label='Thursday'
                        checked={this.state.thurs}
                        onChange={(thurs) => this.setState({thurs:!thurs})}
                    />
                    <CheckBox
                        label='Friday'
                        checked={this.state.fri}
                        onChange={(fri) => this.setState({fri:!fri})}
                    />
                    <CheckBox
                        label='Saturday'
                        checked={this.state.sat}
                        onChange={(sat) => this.setState({sat:!sat})}
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
