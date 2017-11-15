import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import {
    Text,
    TextInput,
    View,
    ScrollView,
    Button,
    Picker,
    StyleSheet} from 'react-native';

export default class GoalCreate extends Component {
    render() {
        return (
            <ScrollView >
                <View style={styles.viewStyle}>
                    <Text style={styles.title}>Create Your Goal</Text>
                    <TextInput
                        style={styles.startEnd}
                        onChangeText={(text) => this.setState({text})}
                        value={"  Start Date"}
                    />
                    <TextInput
                        style={styles.startEnd}
                        onChangeText={(text) => this.setState({text})}
                        value={"  End Date"}
                    />
                    <Button
                        onPress={printThing = () => {
                            alert("This does nothing")
                        }}
                        title="Submit"
                        color="silver"/>
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
                    <View>
                        <Text style={styles.text}>Team Size Limit</Text>
                    </View>
                    <Picker style={styles.picker}>
                        <Picker.Item
                            color='white'
                            label='1'
                            value='1'
                        />
                        <Picker.Item
                            color='white'
                            label='2'
                            value='2'
                        />
                        <Picker.Item
                            color='white'
                            label='3'
                            value='3'
                        />
                        <Picker.Item
                            color='white'
                            label='4'
                            value='4'
                        />
                        <Picker.Item
                            color='white'
                            label='5'
                            value='5'
                        />
                        <Picker.Item
                            color='white'
                            label='6'
                            value='6'
                        />
                        <Picker.Item
                            color='white'
                            label='7'
                            value='7'
                        />
                        <Picker.Item
                            color='white'
                            label='8'
                            value='8'
                        />
                        <Picker.Item
                            color='white'
                            label='9'
                            value='9'
                        />
                        <Picker.Item
                            color='white'
                            label='10'
                            value='10'
                        />
                    </Picker>
                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'black',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative',
        flex:1
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        width: '80%',
    },
    startEnd: {
        height: 40,
        width: '85%',
        borderColor: 'black',
        backgroundColor: '#222222',
        borderWidth: 1,
        marginTop: '5%',
        color: 'silver',
        borderRadius:10,
        alignItems:'center'
    },
    checkBoxCont: {
        marginTop: 10
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color:'#b21726',
        marginTop: 30
    },
    picker: {
        backgroundColor: 'black',
        width: '100%',
        margin:0,
        padding: 0
    }
});

