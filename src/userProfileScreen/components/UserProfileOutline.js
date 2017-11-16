import React, {Component} from 'react';
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import * as Progress from 'react-native-progress';
export default class UserProfile extends Component {
    state = {
        curTime: null
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }, 1000)
    }

    render() {


        return (
            <ScrollView style={styles.scrollCont}>
                <View style={styles.titleStyle}>
                    <Text style={styles.title}>Your Progress</Text>
                </View>
                    <View style={styles.nameCont}>
                        <Text style={styles.nameText}>Name Here</Text>
                    </View>
                {/*<Progress.Circle size={30} indeterminate={true} />*/}
                    <View style={styles.btnCont}>
                        <View style={styles.dateCont}>
                            <Text style={styles.date}>{this.state.curTime}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.signUpButton}
                            onPress={printThing = () => {
                                alert("This does nothing")
                            }}
                            color='silver'>
                            <Text style={styles.signUpText}>Complete Workout</Text>
                        </TouchableOpacity>
                    </View>

            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    scrollCont: {
        flex: 1
    },
    titleStyle: {
        marginTop: '13%',
        // justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative',
        flex:1
    },
    btnCont: {
        height: '20%',
        width: '100%',
        marginTop: '13%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative'
    },
    nameCont: {
        marginTop: '15%',
        alignItems: 'center',
        flex: 1
    },
    nameText: {
        color: 'silver',
        fontSize: 20,
        fontWeight: '500',
    },
    text: {
        color: 'silver'
    },
    dateCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    date: {
        fontSize: 20,
        fontWeight: '500',
        height: 50,
        width: '100%',
        color: '#b21726'
    },
    title: {
        fontSize: 40,
        // height: '30%',
        textAlign: 'center',
        color: '#b21726',
        width: '40%',
    },
    signUpButton: {
        backgroundColor: '#222222',
        width: '50%',
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    signUpText: {
        color: 'silver',
        fontWeight: '600',
        fontSize: 16,
    }
});

