
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import RouterComponent from './src/Router';

import Title from './src/landingScreen/components/LandingOutline';

export default class App extends Component<{}> {
  render() {
    return (
      //<View style={ styles.container }>
        //<Title />
      //</View>
        <RouterComponent />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black'
  },
});
