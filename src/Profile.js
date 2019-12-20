import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Input, Button,} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import pages from './pages';
import Login from './Login';

class Profile extends React.Component {
  emailIcon = () => <Icon name="envelope" size={20} color="black"/>;
  passIcon = () => <Icon name="lock" size={20} color="black" />;

  state ={
    insert: "",
  };
  updateSearch = (value) => {
    this.setState({ 
      insert: value, 
      insertList: []
    });
  };

  render() {
    const {insert} = this.state;
    return (
      <>
        
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <View>
            <Text style={{fontSize: 25, textAlign: 'center'}}>
              Register on <Text style={{color:'blue', fontWeight:'bold'}} 
              onPress={() => this.props.navigation.navigate(pages.home)}>iFamuzza </Text>
            </Text>
          </View>
          <Input placeholder="Enter your email" leftIcon={this.emailIcon} 
                  onChangeText={this.updateSearch}
                  value={this.state.insert}/>
          <Input
            placeholder="Enter your password"
            onChangeText={this.updateSearch}
            value={this.state.insert}
            secureTextEntry
            leftIcon={this.passIcon}
          />
          <Input
            placeholder="Confirm your password"
            onChangeText={this.updateSearch}
            value={this.state.insert}
            secureTextEntry
            leftIcon={this.passIcon}
          />
            <Text style={{padding: 10, fontSize: 20}}> Optional </Text>
          <Input placeholder="Name"
                onChangeText={this.updateSearch}
                value={this.state.insert} />
          <Input placeholder="Surname" 
                onChangeText={this.updateSearch}
                value={this.state.insert} />
          <Input placeholder="Phone" 
                onChangeText={this.updateSearch}
                value={this.state.insert} />
          <Input placeholder="Allergies"
                onChangeText={this.updateSearch}
                value={this.state.insert} />
          <Input placeholder="Shipping address" 
                onChangeText={this.updateSearch}
                value={this.state.insert}/>
          <Input placeholder="Payment method"
                onChangeText={this.updateSearch}
                value={this.state.insert} />
          <View style={{borderRadius: 70, padding: 10}}>
            <Button title="Create account" type="solid" />
          </View>
          <Text style={styles.text2}>Are you already registered on iFamuzza?  
          <Text style={styles.underline} onPress={() => this.props.navigation.navigate(pages.login)}> 
          Login </Text></Text>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    flexDirection: 'column',
    padding: 15,
  },

  text: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text2: {
    paddingBottom: 20,
    paddingTop:10,
   //fontWeight: 'bold',
   textAlign:'center',
    fontSize: 15,
  },
  underline: {textDecorationLine: 'underline',
              color: 'blue',
              textAlign: 'center',
              },
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
});

export default Profile;
