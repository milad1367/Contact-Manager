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
		console.log(contact);
		var id = contact.id;
        //<a href="#" onClick={this._openEditModal} className="secondary-content">  <i className="material-icons">edit</i></a>
		return(
			  <div className="row">
				  <div className="col-8">
						<div className="row">
						  <div className="col-3">
							  <img className="rounded-circle"  src={process.env.PUBLIC_URL + contact.img}  />
							</div>
							<div className="col-8">
								<div className="mt-4">
									<span className="font-weight-bold">{contact.name}</span>
									<p>
										Phone Number: {contact.phone} <br />
										Email: {contact.email}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4 text-right">
						<Mutation mutation={OPEN_EDIT_MODAL} variables={{ id }}>
							{openEditModal => (
							<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editContactModal"
								onClick={openEditModal} 
							>
								Edit Contact
							</button>
							)}
						</Mutation>
					</div>
				</div>
		);
	
	}
	
};

export default  Contact;