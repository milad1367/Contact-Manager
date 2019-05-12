import React, { Component } from 'react'

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditContactModal from './EditContactModal';



const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`;
const query = gql`
query test {
  visibilityFilter @client 
  
}
`;
class Contact extends Component{
	render() {
		var contact = this.props.contact;
        //<a href="#" onClick={this._openEditModal} className="secondary-content">  <i className="material-icons">edit</i></a>
		return(
			<li className="collection-item avatar">
			
				<img src={contact.avatar} className="circle" />
				<span className="title">{contact.name}</span>
				<p>
				   Phone Number: {contact.phone} <br />
				   Email: {contact.email}
				</p>


				<Query query={GET_VISIBILITY_FILTER}>
					{({ data, client }) => (
					<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
						onClick={() => {
							            client.writeData({ data: { showEditModal: true } });
												}}
					>
						test
					</button>
					)}
				</Query>
				
			</li>
		);
	
	}
	
};

export default  Contact;