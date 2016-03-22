import React from 'react';
import Message from './message.js';
var MessageList = React.createClass({
  render() {
      return (
          <div className='messageList' style="border: "2px solid #a6a8b1"; marginRight: 600;">
              {
                  this.props.messages.map((message, i) => {
                      return (
                          <Message
                              key={i}
                              user={"Me"}
                              text={message.text}
                          />
                      );
                  })
              }
          </div>
      );
  }
});
export default MessageList;