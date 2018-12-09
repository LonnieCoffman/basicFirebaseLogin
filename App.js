import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Card, CardSection, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAmvmtJNVUp2IyFFawOIoUnfCXlinfpp2c',
        authDomain: 'authentication-d70cb.firebaseapp.com',
        databaseURL: 'https://authentication-d70cb.firebaseio.com',
        projectId: 'authentication-d70cb',
        storageBucket: '',
        messagingSenderId: '932351825334'
    });

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false });
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button
                onPress={() => firebase.auth().signOut()}
                buttonText="Log out"  
              />
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  };
};

styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignSelf: 'center'
  }
}

export default App;