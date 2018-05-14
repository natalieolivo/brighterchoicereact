import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import SocketIOClient from 'socket.io-client';
import Client from './client/client';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: ' ' };
    this.socket = SocketIOClient('https://serene-citadel-98793.herokuapp.com/', {
      transports: ['websocket'] // you need to explicitly tell it to use websockets
    });

    // this.socket.on('message', function(message) {      
    //   console.log('dat message', message);
    // });

    this.onPressEmitMessage = () => {    
      this.socket.emit('message', this.state.text);     
    };

  }  

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="enter your message girl ... "
          onChangeText={(text) => {
            this.setState({text});
          }}          
          value={this.state.text}
        />
        <Button
          onPress={this.onPressEmitMessage}
          title="Send Message"
          color="#841584"          
        />
        <Client message={this.state.text}></Client>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20    
  }
});

export default App;