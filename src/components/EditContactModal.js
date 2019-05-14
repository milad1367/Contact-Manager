
import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';


const MODAL_QUERY = gql`
  query {
      showEditModal @client
      selectedContact @client {
          id
          name
          phone
          email
      }
  }
`;
const EDIT_CONTACT = gql`
  mutation EditContact($id: Int!,$name: String!,$phone: string,$email: string) {
    editContact(id: $id,name: $name, phone: $phone, email: $email) @client {
        id
    }
  }
`;

class EditContactModal extends React.Component {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputPhone = React.createRef();
        this.inputEmail = React.createRef();
    }
    render() {
        return (
            <Query query={MODAL_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return "loading...";
                        if (error) return `Error! ${error.message}`;
                        
                        return (
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form key={data.selectedContact.id}>
                                <div className="modal-body">
                                    <input 
                                        type="text" 
                                        defaultValue={data.selectedContact.name}
                                        ref={this.inputName}
                                    />
                                    <input 
                                        type="text" 
                                        defaultValue={data.selectedContact.phone}
                                        ref={this.inputPhone}
                                    />
                                    <input 
                                        type="text" 
                                        defaultValue={data.selectedContact.email}
                                        ref={this.inputEmail}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <Mutation mutation={EDIT_CONTACT}>
                                       {editContact => {
                                          return (
                                             <a onClick={() => { editContact({variables: {id: data.selectedContact.id,name: this.inputName.current.value,phone: this.inputPhone.current.value,email: this.inputEmail.current.value }});}}  className="btn btn-primary">Save changes</a>
                                          )      
                                       }}
                                       
                                    </Mutation>
                                </div>
                            </form>
                        </div>
                    )
                }}
                    
            </Query>
          
          )
      }
    }


export default EditContactModal
