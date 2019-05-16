import React, { Component } from 'react'
//import './App.css';
import  ContactList  from './ContactList';
import EditContactModal from './EditContactModal';
import AddNewContact from './AddNewContact';
import Test from './Test'
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
        <Test />
        <AddNewContact />
        <EditContactModal /> 
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
