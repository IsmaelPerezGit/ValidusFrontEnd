import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet
} from 'react-native';
import DatePicker from 'react-native-datepicker'

class StartDateForm extends Component {
    state = {
        date: '2017-11-15',
        weeks: ''
    };

    render() {
        return (
            <View style={styles.formCont}>
                <View style={styles.startDateTextCont}>
                    <Text style={styles.startDateText}>Start Date</Text>
                </View>
                <View style={styles.datePickerCont}>
                <DatePicker
                    style={{width: 200}}
                    date={this.state.startDate}
                    mode="date"
                    placeholder="start date"
                    format="MM-DD-YYYY"
                    minDate="2017-05-01"
                    maxDate="2018-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 0
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({startDate: date})}}
                />
                </View>
                <TextInput
                    placeholder='how many weeks'
                    placeholderTextColor='grey'
                    style={styles.weeksInput}
                    value={this.state.endDate}
                    onChangeText={(endDate) => this.setState({endDate})}/>
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
        marginTop:10,
        marginBottom:20
    },
    startDateTextCont: {
        alignItems: 'center',
        marginTop: 40
    },
    startDateText: {
       color:'orange'
    },
    weeksInput: {
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 40,
        width: '85%',
        borderColor: 'black',
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
