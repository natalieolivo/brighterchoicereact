'use strict';

(function() {

  // private vars
  var socketio = io();
  var recordingStatusMessage = document.querySelector('.message');
  var transcriptionContent = '';

  socketio.on('message', function(speechData) {
    console.log("Last Message Result", speechData);
    console.log("Last Message DIV", recordingStatusMessage);
    recordingStatusMessage.innerHTML = speechData;    
  }); 


  /**
    Socket 
  **/
  

})();
