var React = require('react');
var Contact = require('./contact');

class ContactList extends React.Component{
	render() {
        var contacts=[];
        contacts = this.props.data.map((_contact) =>
        <Contact key={_contact.id.toString()}
                  contact={_contact} />
        );

		return(<ul className="collection">{contacts}</ul>);
	}
};

module.exports = ContactList;