import React, { Component } from 'react'
//import './App.css';
import  ContactList  from './ContactList';
import EditContactModal from './EditContactModal';
import AddContactModal from './AddContactModal';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Get_Contacts = gql`
query GetContacts {
  contacts @client {
    id
    name
    phone
    email
  }
}
`;
class App extends Component {

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addContactModal"
					>
						Add Contact Modal
					</button>
        <div className="modal fade" id="addContactModal" ref={modal=> this.modal = modal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <AddContactModal />
          </div>
        </div>
        <div className="modal fade" id="exampleModal" ref={modal=> this.modal = modal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <EditContactModal />
          </div>
        </div>
        <Query query= {Get_Contacts}>
           {({data : {contacts}}) => (
           <ContactList data={contacts}/>
           )}
           
        </Query>
      </div>
    );
  }
}

export default App;
