import React, { Component } from 'react'
import '../styles/App.css';
import  ContactList  from './ContactList';
import EditContactModal from './EditContactModal';
import AddNewContact from './AddNewContact';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Get_Contacts = gql`
query GetContacts {
  contacts @client {
    id
    name
    phone
    email
    img
  }
}
`;
class App extends Component {

  render() {

    return (
      <div>
        <AddNewContact />
        <EditContactModal /> 
        
        <Query query= {Get_Contacts}>
           {({loading,error,data}) => {
             if (loading) {
               return <div>loading</div>
             }
             if( error ) {
               return <div> some error in get data</div>
             }
             return (<ContactList data={data.contacts}/>)
           }} 
        </Query>
      </div>
    );
  }
}

export default App;
