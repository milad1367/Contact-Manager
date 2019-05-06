import React from 'react';
import './App.css';
var ContactList = require('./components/contact-list.js');


function App() {
  var contacts = [
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
    },
    {
      id: 3,
      name : 'Ricky M. Digiacomo',
      phone: '918-774-0199',
      email: 'RickyMDigiacomo@teleworm.us'
    },
    {
      id: 4,
      name : 'Michael K. Bayne',
      phone: '702-989-5145',
      email: 'MichaelKBayne@rhyta.com'
    },
    {
      id: 5,
      name : 'John I. Wilson',
      phone: '318-292-6700',
      email: 'JohnIWilson@dayrep.com'
    },
    {
      id: 6,
      name : 'Rodolfo P. Robinett',
      phone: '803-557-9815',
      email: 'RodolfoPRobinett@jourrapide.com'
    }
  ];
  return (
    <div>
      <ContactList data={contacts}/>
    </div>
  );
}

export default App;
