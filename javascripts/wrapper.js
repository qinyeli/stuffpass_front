import RecentContactList from './recentContactList.js';
import MessageBox from './messageBox.js';
import React from 'react';

var socket = io();

var Wrapper = React.createClass({

  getInitialState: function() {
    return {contactState: [{ id:0, contactName:"No one", contactStatus: "online"}] }
    //This means I set the initial state of contactState to the prop data
  },

  componentDidMount: function() {
    socket.emit("myID", "Sindy Li"); // to tell the backend that I am online

    var _this = this;

    socket.on("initialStatus", function(contactStatus) { // contactStatus is an array
      console.log("Got the initial status");
      _this.setState({contactState: contactStatus});
    })

    socket.on("updateStatus", function(contactStatus) { // contactStatus is an object
      console.log("Got update status");
      var oldState = _this.state.contactState;
      
      for (var i = 0; i < oldState.length; ++i) {
        if (oldState[i].id == contactStatus.id) {
          oldState[i].contactStatus = contactStatus;
          break;
        }
      }

      _this.setState({contactState: oldState});
    });
  },

  send_contact_id: function(contact_id) {
    socket.emit("contactID", contact_id);
  },
  
  send_message: function(message) {
    socket.emit("chat_message", message);
  },

  render: function() {
    return(
      <div className="wrapper">
        <h1>StuffPass</h1>
        <RecentContactList data = {this.state.contactState} send_contact_id = {this.send_contact_id} />

        <h2>Chatting Part</h2>
        <MessageBox send_message = {this.send_message}/>
      </div>
    );
  }
});

export default Wrapper;
