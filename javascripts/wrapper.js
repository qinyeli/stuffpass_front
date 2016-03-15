import RecentContactBox from './recentContactBox.js';
import InputBox from './inputBox.js';
import React from 'react';

var Wrapper = React.createClass({
  componentDidMount: function() {
    var socket = io();
    socket.emit("myID", "Sindy Li");
  },
  render: funcon(){
    return(
      <div className="wrapper">
        <h1>StuffPass</h1>
        <RecentContactBox/>
        <h2>Chatting Part</h2>
        <InputBox />
      </div>
      );
  }
});

export default Wrapper;