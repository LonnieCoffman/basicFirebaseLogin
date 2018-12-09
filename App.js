import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAmvmtJNVUp2IyFFawOIoUnfCXlinfpp2c',
        authDomain: 'authentication-d70cb.firebaseapp.com',
        databaseURL: 'https://authentication-d70cb.firebaseio.com',
        projectId: 'authentication-d70cb',
        storageBucket: '',
        messagingSenderId: '932351825334'
    })
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
};

export default App;