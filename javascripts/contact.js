import React from 'react';

var Contact = React.createClass({
	render: function() {
		if (this.props.Status=="online"){
			return (
			<div style={Background_Contacts} className="contact">
			<span style={StatusTrue}>
	        O  
	        </span>
	        <span className="contactName">
					{this.props.contactName}
			</span>		
					<span> is </span>
					{this.props.contactStatus}
			</div>
		);} else {
				return(
      <div style={Background_Contacts} className="contact">
      <span style={StatusFalse}>
       O 
        </span>
        <span className="contactName">
          {this.props.contactName}
        </span>
      </div>
	);}
			}
	} // render
}); // Contact

export default Contact;
