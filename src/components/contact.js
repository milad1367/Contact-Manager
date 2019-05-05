var React = require('react');

class Contact extends React.Component{
	render() {
		var contact = this.props.contact;

		// contact component ( for every contacts )
		// used by ContactList.react.js
		
		//<a href="#" className="secondary-content"><i className="mdi-editor-mode-edit"></i></a>
		return(
			<li className="collection-item avatar">
				<img src={contact.avatar} className="circle" />
				<span className="title">{contact.name}</span>
				<p>Phone Number: {contact.phone} <br />
				Email: {contact.email}
				</p>
				<a href="#" onClick={this._openEditModal} className="secondary-content">  <i className="material-icons">edit</i></a>
			</li>
		);
	
	}
	
};

module.exports = Contact;