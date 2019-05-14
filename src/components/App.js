import React, { Component } from 'react'
//import './App.css';
import  ContactList  from './ContactList';
import EditContactModal from './EditContactModal';
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
