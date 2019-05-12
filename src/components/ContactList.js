
import React, { Component } from 'react'
import Contact from './Contact'

class ContactList extends Component{
	render() {
        var contacts=[];
        contacts = this.props.data.map((_contact) =>
        <Contact key={_contact.id.toString()}
                  contact={_contact} />
        );

		return(<ul className="collection">{contacts}</ul>);
	}
};

export default  ContactList;