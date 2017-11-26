import React, {Component} from 'react';
import {
    Text,
    View,
    Picker,
    StyleSheet
} from 'react-native';

class TeamSize extends Component{
    constructor (props) {
        super(props);
        this.state = {
            teamSize: ''
        };

    }
    teamSizeChanger() {
        return this.setState({teamSize})
    }
    render() {
        return (
            <View>
                <View style={styles.sizeLimitTextCont}>
                    <Text style={styles.text}>Team Size Limit</Text>
                </View>
                <View style={styles.pickerCont}>
                    <Picker style={styles.picker}>
                        <Picker.Item
                            color='white'
                            label='1'
                            value='1'
                        />
                        <Picker.Item
                            color='white'
                            label='2'
                            value='2'/>
                        <Picker.Item
                            color='white'
                            label='3'
                            value='3'/>
                        <Picker.Item
                            color='white'
                            label='4'
                            value='4'/>
                        <Picker.Item
                            color='white'
                            label='5'
                            value='5'/>
                        <Picker.Item
                            color='white'
                            label='6'
                            value='6'/>
                        <Picker.Item
                            color='white'
                            label='7'
                            value='7'/>
                        <Picker.Item
                            color='white'
                            label='8'
                            value='8'/>
                        <Picker.Item
                            color='white'
                            label='9'
                            value='9'/>
                        <Picker.Item
                            color='white'
                            label='10'
                            value='10'
                        />
                    </Picker>
                </View>
            </View>
        );
    }
};
export default TeamSize;

const styles = StyleSheet.create({
    sizeLimitTextCont: {
        height: '50%',
        alignItems: 'center'
    },
    picker: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        // backgroundColor:'orange'
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#b21726',
        marginTop: 30
    },
    pickerCont: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },

});
