import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './Login';
import Profile from './Profile';
import pages from './pages';

class Home extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Button
            style={styles.signbuttonstyle}
            onPress={() => this.props.navigation.navigate(pages.login)}
            type="outline"
            icon={<Icon name="user" color="black" size={25} />}
          />
          <Text style={styles.logostyle}>iFamuzza</Text>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signbuttonstyle: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'transparent',
    position: 'absolute',
    left: 170,
    top: 75,
  },
  logostyle: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'AppleSDGothicNeo-Light',
  },
});

export default Home;
