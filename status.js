var io = require("./server");
var stable = require("./stable")
console.log("Server running!")

var contactStatus1 = [
	{id:1, contactName:"Harry Potter", contactStatus: "offline"},
	{id:2, contactName:"Ron Weasley", contactStatus: "offline"},
	{id:3, contactName:"Hermione Granger", contactStatus: "offline"},
	{id:4, contactName:"Albus Dumbledore", contactStatus: "online"}
];

var contactStatus2 = [
	{id:2, contactName:"Ron Weasley", contactStatus: "online"},
	{id:4, contactName:"Albus Dumbledore", contactStatus: "offline"}
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

