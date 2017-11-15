import React, { Component } from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '  Username',
            password: '  Password'
        };
    }

    render() {
        return (
            <View>
                <View style={styles.signInFormCont}>
                    <TextInput
                        style={styles.signInForm}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.username}
                    />
                    <TextInput
                        style={styles.signInForm}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.password}
                    />
                    <Button
                        onPress={printThing = () => {
                            alert("This does nothing")
                        }}
                        title="Submit"
                        color='silver'
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    signInForm: {
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
    signInFormCont: {
        height: '30%',
        marginTop: '15%',
        alignItems: 'center'
    },
});


