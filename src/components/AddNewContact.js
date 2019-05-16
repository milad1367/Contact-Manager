import React, { Component } from 'react';

import {Modal} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

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
    this.inputName = React.createRef();
    this.inputPhone = React.createRef();
    this.inputEmail = React.createRef();
    this.state = {
      showModal: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }


  closeModal() {
    this.inputName.current.value = "";
    this.inputPhone.current.value = "";
    this.inputEmail.current.value = "";
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (

      <div>
        <Button href="#" onClick={this.openModal}>
          Add New Contact
        </Button>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-content">
              <form>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="fullName">Full name</label>
                    <input type="text" className="form-control" id="fullName" aria-describedby="fullName" placeholder="Full Name" ref={this.inputName} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tel">Phone Number</label>
                    <input type="tel" className="form-control" id="tel" aria-describedby="tel" placeholder="Phone Number" ref={this.inputPhone} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Your Email" ref={this.inputEmail} />
                  </div>
                </div>
                
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <Mutation mutation={ADD_CONTACT}>
                  {addContact => {
                    return (
                      <a className="btn btn-primary" onClick={(e) => { 
                          e.preventDefault();
                          addContact({variables: {name: this.inputName.current.value,phone: this.inputPhone.current.value,email: this.inputEmail.current.value }});
                          this.closeModal();
                        }}  
                        >Save changes
                      </a>
                    )      
                  }}
                  </Mutation>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AddNewContact;