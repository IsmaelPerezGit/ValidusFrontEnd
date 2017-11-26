import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet} from 'react-native';
import CheckBox from 'react-native-checkbox';

const ChooseDays = (props) => {

    return (
        <View style={styles.chooseDaysCont}>
            <Text style={styles.text}>Choose your workout days</Text>
            <View style={styles.checkBoxCont}>
                <CheckBox
                    label='Sunday'
                    checked={props.sun}
                    onChange={this.onCheckBoxSelect}
                />
                <CheckBox
                    label='Monday'
                    checked={props.mon}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Tuesday'
                    checked={props.tues}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Wednesday'
                    checked={props.wed}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Thursday'
                    checked={props.thurs}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Friday'
                    checked={props.fri}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Saturday'
                    checked={props.sat}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
            </View>
        </View>
    );
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
