import Contact from './contact.js';
import React from 'react';

var RecentContactList = React.createClass({
	send_contact: function(contact_id) {
		this.props.send_contact_id(contact_id);
	},

	render: function() {
		var _this = this;
		var contactNodes = this.props.data.map(function(contact) {
			return (
			  <Contact 
			  	contactName = {contact.contactName}
			  	contactStatus = {contact.contactStatus}
			  	key = {contact.id}
			  	send_contact_id = {_this.send_contact}
			  />
			);
		});
		return (
			<div className="contactList"   style="background: #3a3f51; color: '#a6a8b1'; marginRight: 600;">
				<h2>Contact List</h2>
			  {contactNodes}
			</div>
		);
	} // render
}); // RecentContactList

export default RecentContactList;