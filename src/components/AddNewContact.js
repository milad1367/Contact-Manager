import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const $ = window.$;
const ADD_CONTACT = gql `
  mutation AddContact($name: String!,$email: String!, $phone: String!) {
    addContact(name: $name, email: $email, phone: $phone) @client {
      id
	}
  }
`;
class AddNewContact extends Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.inputName = React.createRef();
    this.inputPhone = React.createRef();
    this.inputEmail = React.createRef();
    this.state = {
      nameAlert: false,
      emailAlert: false,
      phoneAlert: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.checkValidate = this.checkValidate.bind(this);
  }


  closeModal() {
    $(this.modal.current).modal('hide');
    this.inputName.current.value = "";
    this.inputPhone.current.value = "";
    this.inputEmail.current.value = "";
    this.setState({  nameAlert: false,emailAlert: false,phoneAlert: false });
  }
  checkValidate() {
    var isValid = true;
    this.setState({ nameAlert: false,emailAlert: false,phoneAlert: false });

    if(!this.inputName.current.value.length) {
      this.setState({nameAlert:true});
      isValid = false;
    }
    if(!this.inputPhone.current.value.length) {
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

      <div className="my-5">
        <button type="button" className="btn btn-success" data-toggle="modal" data-keyboard="false" data-backdrop="static" data-target="#addNewContactModal">
						<span aria-hidden="true"><i className="fas fa-user-plus"></i></span>
            <span><strong>Add</strong></span>     
				</button>
        <div className="modal fade" id="addNewContactModal" ref={this.modal} tabIndex="-1" role="dialog" aria-labelledby="addNewContactModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button onClick={()=>(this.closeModal())} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="fullName">Full name</label>
                      <input type="text"  className="form-control" id="fullName" aria-describedby="fullName" placeholder="Full Name" ref={this.inputName} />
                      {this.state.nameAlert ? 
                        <div className="alert alert-danger" role="alert">
                          Name is requird!
                        </div> : null
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="tel">Phone Number</label>
                      <input type="tel" className="form-control" id="tel" aria-describedby="tel" placeholder="Phone Number" ref={this.inputPhone} />
                      {this.state.phoneAlert ? 
                        <div className="alert alert-danger" role="alert">
                          Phone number is requird!
                        </div> : null
                      }
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Your Email" ref={this.inputEmail} />
                      {this.state.emailAlert ? 
                        <div className="alert alert-danger" role="alert">
                          Email is required!
                        </div> : null
                      }
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => {this.closeModal()}} data-dismiss="modal">Close</button>
                    <Mutation mutation={ADD_CONTACT}>
                    {addContact => {
                      return (
                        <button type="button" className="btn btn-primary" onClick={(e) => { 
                            e.preventDefault();
                            if(this.checkValidate()) {
                              addContact({variables: {name: this.inputName.current.value,phone: this.inputPhone.current.value,email: this.inputEmail.current.value }});
                              this.closeModal();
                            }
                            else {
                              return false
                            }

                          }}  
                          >Save changes
                        </button>
                      )      
                    }}
                    </Mutation>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default AddNewContact;