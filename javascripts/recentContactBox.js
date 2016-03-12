import RecentContactList from './recentContactList.js';
import React from 'react';

var RecentContactBox = React.createClass({
	getInitialState: function() {
		return {dataState: [{	id:0, contactName:"No one", contactStatus: "online"}] }
		//This means I set the initial state of dataState to the prop data
	},

	componentDidMount: function() {
		var socket = io();
		socket.emit("myID", "Sindy Li");

		var _this = this;
		socket.on("initialStatus", function(contactStatus) {
			console.log("Got the initial status");
			_this.setState({dataState: contactStatus});
		}).on("updateStatus", function(contactStatus) {
			console.log("Got update status");
			var oldState = _this.state.dataState;
			_this.setState({dataState: contactStatus.concat(oldState) });
		});
	}, // componentDidMount

	render: function() {
		return (
			<div className="contactBox">
				<RecentContactList data = {this.state.dataState}/>
			</div>
		);
	} // render
}); // RecentContacBox

export default RecentContactBox;