import React, { Component } from 'react'
//import './App.css';
import  ContactList  from './ContactList';
import EditContactModal from './EditContactModal';
class App extends Component {
  contacts = [
    {
      id: 1,
      name : 'Terrence S. Hatfield',
      phone: '651-603-1723',
      email: 'TerrenceSHatfield@rhyta.com'
    },
    {
      id: 2,
      name : 'Chris M. Manning',
      phone: '513-307-5859',
      email: 'ChrisMManning@dayrep.com'
    }
  ];
  render() {

    return (
      <div>
        <div className="modal fade" id="exampleModal" ref={modal=> this.modal = modal} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <EditContactModal />
          </div>
        </div>
        <ContactList data={this.contacts}/>
      </div>
    );
  }
}

export default App;
