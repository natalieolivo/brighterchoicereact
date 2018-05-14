const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3001;

http.listen(port, () => console.log('listening on *:3001'));

app.use(express.static(__dirname + '/public'));

// app.get('/', function (req, res) {
//   res.send('hello world')
// })

function onConnection(socket){

	console.log('A user just joined on', socket.id);
  	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});

  	socket.on('message', function(message) {
		console.log('latest message', message);
  		socket.broadcast.emit('message', message);  		
  	});


  	
}

io.on('connection', onConnection);