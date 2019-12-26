import React from 'react';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import Auth from '../model/Auth';
import pages from '../pages';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }


  updateEmail = text => {
    this.setState({email: text});
  };

  updatePassword = text => {
    this.setState({password: text});
  };

  login = () => {
    const {email, password} = this.state;
    Auth.login(email, password)
      .then(user => {
        // this.props.navigation.goBack();
        console.log('user', Auth.user, Auth.accessToken);
        this.setState({utenteAutenticato: true});
      })
      .catch(error => {
        console.log('error', error.message);
        
      });
  };

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Input
            placeholder="email@address.com"
            onChangeText={this.updateEmail}
            label=" Email"
            keyboardType="email-address"
            autoCapitalize="none"
            errorMessage= {this.erroreM}
            autoCorrect={false}
            labelStyle={{
              color: 'black',
              fontSize: 20,
            }}
            leftIcon={{
              type: 'font-awesome',
              name: 'envelope',
              color: 'gray',
              containerStyle: {marginRight: 16},
            }}
          />
        </View>
        <View style={styles.input}>
          <Input
            placeholder="password"
            onChangeText={this.updatePassword}
            label=" Password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            // keyboardType="visible-password"
            labelStyle={{
              color: 'black',
              fontSize: 20,
            }}
            leftIcon={{
              type: 'font-awesome',
              name: 'lock',
              color: 'gray',
              size: 30,
              containerStyle: {marginRight: 16},
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Button
            onPress={this.login}
            type="solid"
            title="Login"
            titleStyle={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          />
        </View>
        <View style ={styles.input}>
          <Button
            onPress={() => this.props.navigation.navigate(pages.signup)}
            type="outline"
            title="Sign In"
            titleStyle={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  input: {
    marginTop: 25,
  },
});
export default Login;
