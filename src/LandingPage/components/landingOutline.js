import React, {Component} from 'react';
import {
    TextInput,
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'Username',
            password: 'Password'
        };
    }

    render() {
        return (
            <View>
                <View style={styles.viewStyle}>
                    <Text style={styles.title}>Validus</Text>
                </View>
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
                        style={styles.thisBtn}
                        onPress={printThing = () => {
                            alert("This does nothing")
                        }}
                        title="Submit"
                        color='black'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        width: '40%',
        // backgroundColor: 'orange'
    },
    viewStyle: {
        height: '12%',
        marginTop: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        // shadowColor: '#ff0000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        elevation: 3,
        position: 'relative'
    },
    signInForm: {
        height: 40,
        borderColor: 'black',
        // backgroundColor: 'white',
        borderWidth: 1,
        marginTop: '5%'
    },
    signInFormCont: {
        height: '30%',
        marginTop: '15%',
    },
    thisBtn: {
        height: '100%',
        backgroundColor: 'black',
        marginTop: '30%'
    }
});


