import RecentContactBox from './rececntContactBox.js';
import InputBox from './inputBox.js';
import React from 'react';

var Wrapper = React.createClass({

  render: function(){
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