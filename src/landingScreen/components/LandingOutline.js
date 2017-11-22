import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Button
} from 'react-native';
import firebase from 'firebase';
import Spinner from './Spinner';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default class Landing extends Component {

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false})
            }
            ;
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null
        };
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.btnCont}>
                        <Button
                            onPress={() => firebase.auth().signOut()}
                            title="Log Out"
                            color='orange'/>
                    </View>);
            case false:
                return (
                    <View style={styles.rendCont}>
                        <LoginForm/>
                        <SignUpForm/>
                    </View>);
            default:
                return <Spinner/>
        }
    }

    render() {
        return (
            <View>
                <Image style={styles.cycleImage}
                       source={{uri: '/Users/ismaelperez/Workspace/Javascript/ValidusProject/ValidusFrontEnd/assets/images/ValidusBikeBg.jpeg'}}/>
                <View style={styles.viewStyle}>
                    <Text style={styles.title}>Validus</Text>
                </View>
                {this.renderContent()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    rendCont: {
        height: '100%'
    },
    btnCont: {
        justifyContent: 'center',
        height: '50%'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: '#b21726',
        width: '40%',
    },
    viewStyle: {
        backgroundColor: 'black',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative'
    },
    cycleImage: {
        height: '14%'
    }
});


