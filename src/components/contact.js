import React  from 'react'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const OPEN_EDIT_MODAL = gql`
  mutation  OpenEditModal($id: Int!) {
    openEditModal (id: $id) @client
  }
`;
const DELETE_CONTACT = gql`
  mutation  DeleteContact($id: Int!) {
    deleteContact (id: $id) @client
  }
`;
const Contact = ({ contact }) => {
    const id = contact.id;
		return(
			  <div className="row">
				  <div className="col-xl-8 col-xs-12">
						<div className="row">
						  <div className="col-xl-3 col-xs-12">
							  <img className="rounded-circle" alt="avatar"  src={process.env.PUBLIC_URL + contact.img}  />
							</div>
							<div className="col-xl-8 col-xs-12">
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
					<div className="col-xl-4 col-xs-12 text-right">
					  <div className="row text-right">
						  <div className="col-12">
								<Mutation mutation={OPEN_EDIT_MODAL} variables={{ id }}>
									{openEditModal => (
									<button type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#editContactModal"
										onClick={openEditModal} 
									>
									  <span><i className="fas fa-external-link-alt"></i></span>
                    <span><strong>Edit</strong></span> 
									</button>
									)}
								</Mutation>
							  <Mutation mutation={DELETE_CONTACT} variables={{ id }}>
									{deleteContact => (
									<button type="button"  className="btn btn-danger"
										onClick={deleteContact} 
									>
										<span aria-hidden="true"><i className="fas fa-trash-alt"></i></span>
										<span><strong>Delete</strong></span>   
									</button>
									)}
								</Mutation>
								</div>
						</div>
					</div>
				</div>
		);
	
	}


export default  Contact;