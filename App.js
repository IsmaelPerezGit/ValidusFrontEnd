import React, {Component} from 'react';
import firebase from 'firebase';
import RouterComponent from './src/Router';

export default class App extends Component {

    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyB5YLTjX6fhtemJmD5f96JaC6gqyt_qYi8',
            authDomain: 'validus-c7c9e.firebaseapp.com',
            databaseURL: 'https://validus-c7c9e.firebaseio.com',
            projectId: 'validus-c7c9e',
            storageBucket: 'validus-c7c9e.appspot.com',
            messagingSenderId: '510343967240'
        };

        firebase.initializeApp(config);
    }

    render() {
        console.log(this.state)
        return (
            <RouterComponent/>
        );
    }
}
