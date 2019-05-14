import React, { Component } from 'react'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditContactModal from './EditContactModal';
import { Mutation } from 'react-apollo';



const OPEN_EDIT_MODAL = gql`
  mutation  OpenEditModal($id: Int!) {
    openEditModal (id: $id) @client
  }
`;
class Contact extends Component{
	render() {
		var contact = this.props.contact;
		var id = contact.id;
        //<a href="#" onClick={this._openEditModal} className="secondary-content">  <i className="material-icons">edit</i></a>
		return(
			<li className="collection-item avatar">
			
				<img src={contact.avatar} className="circle" />
				name:<span className="title">{contact.name}</span>
				<p>
				   Phone Number: {contact.phone} <br />
				   Email: {contact.email}
				</p>


				<Mutation mutation={OPEN_EDIT_MODAL} variables={{ id }}>
					{openEditModal => (
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
						onClick={openEditModal} 
					>
						test
					</button>
					)}
				</Mutation>
				
			</li>
		);
	
	}
	
};

export default  Contact;