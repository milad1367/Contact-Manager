
import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const $ = window.$;

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
        this.modal = React.createRef();
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.checkValidate = this.checkValidate.bind(this);

        this.state = {
            nameAlert: false,
            emailAlert: false,
            phoneAlert: false
          }
    }
    hideModal = () => {
      $(this.modal.current).modal('hide');
      console.log("in hide");
    }
    showModal = () => {
        $(this.modal.current).modal('show');
    }
    checkValidate() {
        var isValid = true;
        this.setState({ nameAlert: false,emailAlert: false,phoneAlert: false });
    
        if(!this.inputName.current.value.length) {
          this.setState({nameAlert:true});
          isValid = false;
        }
        if(!this.inputPhone.current.value) {
          this.setState({phoneAlert:true});
          isValid = false;
        }
        if(!this.inputEmail.current.value.length) {
          this.setState({emailAlert:true});
          isValid = false;
        }
        if(!isValid) {
          return false
        }
        return true   
    
    }
    render() {
        return (
            <div className="modal fade" id="editContactModal" ref={this.modal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
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
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full name</label>
                                                <input type="text" className="form-control" id="fullName" aria-describedby="fullName" placeholder="Full Name" defaultValue={data.selectedContact.name}
                                                ref={this.inputName} />
                                                {this.state.nameAlert ? 
                                                <div className="alert alert-danger" role="alert">
                                                    Name is requird!
                                                </div> : null
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="tel">Phone Number</label>
                                                <input type="tel" className="form-control" defaultValue={data.selectedContact.phone} id="tel"  aria-describedby="tel" placeholder="Phone Number" ref={this.inputPhone} />
                                                {this.state.phoneAlert ? 
                                                    <div className="alert alert-danger" role="alert">
                                                    Phone number is requird!
                                                    </div> : null
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email" aria-describedby="email" defaultValue={data.selectedContact.email} placeholder="Your Email" ref={this.inputEmail} />
                                                {this.state.emailAlert ? 
                                                    <div className="alert alert-danger" role="alert">
                                                    Email is required!
                                                    </div> : null
                                                }
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <Mutation mutation={EDIT_CONTACT}>
                                            {editContact => {
                                                return (
                                                    <a onClick={() => {
                                                        if(this.checkValidate()) { 
                                                            editContact({variables: {id: data.selectedContact.id,name: this.inputName.current.value,phone: this.inputPhone.current.value,email: this.inputEmail.current.value }});
                                                            this.hideModal();
                                                        }
                                                        return false
                                                        }
                                                    }  
                                                    className="btn btn-primary">Save changes</a>
                                                )      
                                            }}
                                            
                                            </Mutation>
                                        </div>
                                    </form>
                                </div>
                            )
                        }}
                            
                    </Query>
                </div>
            </div>
          
          )
      }
    }


export default EditContactModal
