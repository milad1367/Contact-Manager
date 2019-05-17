
import React, { Component } from 'react'
import Contact from './Contact'

class ContactList extends Component{
	render() {
        var contacts=[];
        contacts = this.props.data.map((_contact) =>
            <li key={_contact.id} className="list-group-item">
                <Contact contact={_contact} />
            </li>

        );

		return(<ul className="list-group">{contacts}</ul>);
	}
};

export default  ContactList;