import React from 'react';

var Contact = React.createClass({
	render: function() {
		if (this.props.Status=="online"){
			return (
			<div className="contact">
			<span className = "StatusTrue" style="color: 'green';">
	        O  
	        </span>
	        <span className="contactName" onClick = {this.props.send_contact_id(this.props.id)}>
					{this.props.contactName}
			</span>		
					<span> is </span>
					{this.props.contactStatus}
			</div>
		);}

			else {
				return(
      <div className="contact">
      <span className = "StatusFalse" style="color: 'red';">
       O 
        </span>
        <span className="contactName">
          {this.props.contactName}
        </span>
      </div>
	);}
	} // render
}); // Contact

export default Contact;
