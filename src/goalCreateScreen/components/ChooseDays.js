import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet} from 'react-native';
import CheckBox from 'react-native-checkbox';

const ChooseDays = () => {
    return (
        <View style={styles.chooseDaysCont}>
            <Text style={styles.text}>Choose your workout days</Text>
            <View style={styles.checkBoxCont}>
                <CheckBox
                    label='Sunday'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Monday'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Tuesday'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Wednesday'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Thursday'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Friday'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Saturday'
                    checked={true}
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
