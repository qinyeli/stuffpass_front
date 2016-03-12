import Contact from './contact.js';
import React from 'react';

var RecentContactList = React.createClass({
	render: function() {
		var contactNodes = this.props.data.map(function(contact) {
			return (
			  <Contact contactName={contact.contactName} contactStatus={contact.contactStatus} key={contact.id} />
			);
		});
		return (
			<div className="contactList">
				<h2>Contact List</h2>
			  {contactNodes}
			</div>
		);
	} // render
}); // RecentContactList

export default RecentContactList;