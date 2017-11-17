import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import * as Progress from 'react-native-progress';

export default class ProfileEdit extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.titleCont}>
                    <Text style={styles.title}>Team Progress</Text>
                </View>
                <ScrollView>
                    <View style={styles.teamProgressCont}>
                        <View style={styles.teamMemberCont}>
                            <View style={styles.nameCont}>
                                <Text style={styles.nameText}>Name Here</Text>
                            </View>
                            <View style={styles.progressBarCont}>
                                <Progress.Bar
                                    progress={.5}
                                    height={20}
                                    animated={true}
                                    color={'#b21726'}
                                    borderWidth={3}/>
                            </View>
                        </View>
                        <View style={styles.teamMemberCont}>
                            <View style={styles.nameCont}>
                                <Text style={styles.nameText}>Name Here</Text>
                            </View>
                            <View style={styles.progressBarCont}>
                                <Progress.Bar
                                    progress={.5}
                                    height={20}
                                    animated={true}
                                    color={'#b21726'}
                                    borderWidth={3}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.daysLeftCont}>
                        <Text style={styles.daysLeftText}>Days Left: 7</Text>
                    </View>
                    <View style={styles.messageBoardCont}>
                        <View style={styles.textAreaCont}>
                            <View style={styles.messageBoardTextArea}>
                                <Text style={styles.messageBoardText}>BIll: This is where the messages are going to
                                    display</Text>
                            </View>
                        </View>
                        <View style={styles.messageFormCont}>
                            <TextInput
                                style={styles.messageForm}
                                onChangeText={(text) => this.setState({text})}
                                value={'type message here'}
                            />
                            <View style={styles.submitMessageBtnCont}>
                                <TouchableOpacity
                                    style={styles.submitButton}
                                    onPress={printThing = () => {
                                        alert("This does nothing")
                                    }}
                                    color='silver'>
                                    <Text style={styles.submitButtonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </ScrollView>
            </View>
        )
            ;
    }
};

const styles = StyleSheet.create({
    viewStyle: {
        height: '100%',
        paddingTop: '10%',
        elevation: 3,
        position: 'relative'
    },
    titleCont: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 1,
        marginBottom: '10%'
    },
    title: {
        fontSize: 40,
        alignItems: 'center',
        textAlign: 'center',
        color: '#b21726',
        width: '100%',
    },
    teamProgressCont: {
        width: '100%',
        height: '100%',
        marginTop: 10,
    },
    teamMemberCont: {
        width: '100%',
        height: '25%',
    },
    nameCont: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        color: 'silver',
        fontSize: 20,
        fontWeight: '500',
    },
    progressBarCont: {
        alignItems: 'center',
        margin: 2
    },
    daysLeftCont: {
        alignItems: 'center',
    },
    daysLeftText: {
        color: '#b21726',
        fontWeight: '600',
        fontSize: 20,
    },
    messageBoardCont: {
        backgroundColor: '#b21726',
        height: '90%',
        width: '100%',
        marginTop: '10%',
    },
    textAreaCont: {
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageBoardTextArea: {
        margin: 1,
        backgroundColor: 'white',
        borderWidth: 2,
        borderBottomWidth: 0,
        borderColor: '#b21726',
        width: '99%',
        height: '99%'
    },
    messageBoardText: {
        margin: '1%',
        marginTop: '3%',
        color: 'black'
    },
    messageFormCont: {
        height: '10%',
        backgroundColor: 'black',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#b21726'
    },
    messageForm: {
        height: '98%',
        width: '85%',
        borderColor: 'black',
        backgroundColor: '#222222',
        borderWidth: 1,
        color: 'silver',
        borderColor: 'silver',
        alignItems: 'center'
    },
    submitMessageBtnCont: {
        height: '100%',
        width: '15%',
        alignItems: 'center',
        elevation: 3,
        backgroundColor: '#222222',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: 'silver'
    },
    submitButtonText: {
        color: 'silver'
    }
});

