import React, {Component} from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

class StartEndDateForm extends Component {
    state = {
        startDate: '',
        endDate: ''
    };

    render() {
        return (
            <View style={styles.formCont}>
                <TextInput
                    placeholder='start date'
                    placeholderTextColor='grey'
                    style={styles.startEndFields}
                    value={this.state.startDate}
                    onChangeText={(startDate) => this.setState({startDate})}/>
                <TextInput
                    placeholder='end date'
                    placeholderTextColor='grey'
                    style={styles.startEndFields}
                    value={this.state.endDate}
                    onChangeText={(endDate) => this.setState({endDate})}/>
            </View>
        );
    }
};
export default StartEndDateForm;

const styles = StyleSheet.create({
    formCont: {
        alignItems: 'center'
    },
    startEndFields: {
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
