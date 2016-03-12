var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// tell the server to find something in public

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res){
	//res.send('<h1>Hello world</h1>');
  	res.sendFile(__dirname + '/index.html');
  	console.log("index.html sent")
});

/*---------------------------------------------------------------------------*/

var contactStatus1 = [
	{id:1, contactName:"Harry Potter", contactStatus: "offline"},
	{id:2, contactName:"Ron Weasley", contactStatus: "online"}
];

var contactStatus2 = [
	{id:3, contactName:"Hermione Granger", contactStatus: "offline"},
	{id:2, contactName:"Ron Weasley", contactStatus: "offline"},
	{id:4, contactName:"Albus Dumbledore", contactStatus: "online"}
];

io.on('connection', function(socket){
	console.log("On connection");
	socket.on("myID", function(name){
		console.log(name);
		socket.emit("initialStatus", contactStatus1);
		console.log("Initial status sent");
		socket.emit("updateStatus", contactStatus2);
		console.log("Update status sent");
	});
});
