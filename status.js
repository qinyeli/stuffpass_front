var io = require("./server");
var stable = require("./stable")
console.log("Server running!")

var contactStatus = [
	{id:1, contactName:"Harry Potter", contactStatus: "offline"},
	{id:2, contactName:"Ron Weasley", contactStatus: "online"}
];

io.on('connection', function(socket){
	console.log("On connection");
	socket.on("myID", function(name){
		console.log(name);
		socket.emit("initialStatus", contactStatus);
		console.log("Initial status sent");
	});
});

