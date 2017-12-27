import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet} from 'react-native';

class MessageBoard extends Component {

    constructor(props) {
        super(props);
        this.state={
             message: '',
            text: ''
        }
    }

    onButtonPress() {
        const { text, message } = this.state;
        this.setState({message: this.props.user.username+ ": " + text, text: ''})
    }

    render () {
        return (
            <View style={styles.messageBoardCont}>
                <View style={styles.textAreaCont}>
                    <View style={styles.messageBoardTextArea}>
                        <Text style={styles.messageBoardText}>{this.state.message}</Text>
                    </View>
                </View>
                <View style={styles.messageFormCont}>
                    <TextInput
                        style={styles.messageForm}
                        onChangeText={(text) => this.setState({text})}
                        placeholder={'type message here'}
                        />
                    <View style={styles.submitMessageBtnCont}>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => this.onButtonPress()}
                            color='silver'>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
};
export default MessageBoard;

const styles = StyleSheet.create({
    messageBoardCont: {
        backgroundColor: '#b21726',
        height: '80%',
        width: '100%',
        marginTop: '7%',
    },
    textAreaCont: {
        height: '85%',
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
        height: '15%',
        backgroundColor: 'black',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#b21726'
    },
    messageForm: {
        height: '98%',
        width: '85%',
        backgroundColor: 'white',
        borderWidth: 2,
        color: '#9e9c9d',
        borderColor: 'silver',
        alignItems: 'center'
    },
    submitMessageBtnCont: {
        height: '100%',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
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
