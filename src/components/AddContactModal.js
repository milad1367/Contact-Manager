
import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const ADD_CONTACT = gql `
  mutation AddContact($name: String!,$email: String!, $phone: String!) {
    addContact(name: $name, email: $email, phone: $phone) @client {
      id
	}
  }
`;
class AddContactModal extends React.Component {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputPhone = React.createRef();
        this.inputEmail = React.createRef();
    }
    render() {
        return (
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLongTitle">Add New Contact</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form>
					<div className="modal-body">
						<input 
							type="text" 
							placeholder="Full Name"
							ref={this.inputName}
						/>
						<input 
							type="text" 
							placeholder="Phone Number "
							ref={this.inputPhone}
						/>
						<input 
							type="text" 
							placeholder="Email"
							ref={this.inputEmail}
						/>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						<Mutation mutation={ADD_CONTACT}>
						{addContact => {
							return (
								<a onClick={() => { addContact({variables: {name: this.inputName.current.value,phone: this.inputPhone.current.value,email: this.inputEmail.current.value }});}}  className="btn btn-primary">Save changes</a>
							)      
						}}
						</Mutation>
					</div>
				</form>
		    </div>
        )      
          
      }
    }


export default AddContactModal
