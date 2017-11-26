import React, {Component} from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker'

class StartDateForm extends Component {
    state = {
        date: '',
        weeks: '',
        totalDays: 0
    };

    render() {
        console.log(this.state)
        return (
            <View style={styles.formCont}>
                <View style={styles.datePickerCont}>
                <DatePicker
                    style={styles.datePicker}
                    date={this.state.date}
                    mode="date"
                    placeholder="Start Date"
                    format="MM-DD-YYYY"
                    minDate="12-01-2017"
                    maxDate="02-01-2018"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 5
                        },
                        dateInput: {
                            marginLeft: 0,
                        }
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}/>
                </View>
                <TextInput
                    placeholder='how many weeks'
                    placeholderTextColor='grey'
                    style={styles.weeksInput}
                    value={this.state.weeks}
                    onChangeText={(weeks) => this.setState({weeks})}/>
            </View>
        );
    }
};
export default StartDateForm;

const styles = StyleSheet.create({
    formCont: {
        alignItems: 'center'
    },
    datePickerCont: {
        alignItems:'center',
        marginTop:50,
        marginBottom:20
    },
    datePicker:{
        width:310,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: '#222222',
        borderRadius:1
    },
    weeksInput: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 40,
        width: '85%',
        backgroundColor: '#222222',
        borderWidth: 1,
        marginTop: '5%',
        color: 'silver',
        borderRadius: 10,
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    }
});
