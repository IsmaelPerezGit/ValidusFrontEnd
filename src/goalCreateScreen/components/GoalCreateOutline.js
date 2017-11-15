import React, { Component } from 'react';
import CheckBox from 'react-native-checkbox';
import {
    Text,
    TextInput,
    View,
    ScrollView,
    Button,
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
    }
});

