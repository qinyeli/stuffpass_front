import React from 'react';

var Contact = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.contactName}
				<span> is </span>
				{this.props.contactStatus}
			</div>
		);
	} // render
}); // Contact

export default Contact;
