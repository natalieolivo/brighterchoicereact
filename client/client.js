import React from 'react';
import SocketIOClient from 'socket.io-client';
import { View, Text } from 'react-native';

class Client extends React.Component {
  constructor(props) {
    super(props);    
  
    // Creating the socket-client (iPhone) instance will automatically connect to the server.
    //this.socket = SocketIOClient('http://localhost:3000');    
  }

  render() {    
    return (
      <View>
      	<Text>Sending {this.props.message}</Text>
      </View>
    );
  }

}

export default Client;