import gql from 'graphql-tag';


export const defaults = {
    contacts : [
        {
        id: 1,
        name : 'Terrence S. Hatfield',
        phone: '651-603-1723',
        email: 'TerrenceSHatfield@rhyta.com',
        img: 'images/faces/1.jpg',
        __typename: 'ContactItem'
        },
        {
        id: 2,
        name : 'Chris M. Manning',
        phone: '513-307-5859',
        email: 'ChrisMManning@dayrep.com',
        img: 'images/faces/2.jpg',

        __typename: 'ContactItem'
        }
    ],
    showEditModal : false,
    showCreateModal : false,
    selectedContactId: "",
    selectedContact : {
      __typename: 'ContactItem',
      id: null,
      name : '',
      phone: '',
      email: '',
      img: ''
    }

};

export const resolvers = {

  Mutation: {
      openEditModal: (_, variables, { cache }) => {
        const id = `ContactItem:${variables.id}`;
        const fragment = gql`
          fragment selectedContact on ContactItem {
              id
              name
              phone
              email
          }
        `;
        const _selectedContact = cache.readFragment({fragment,id});
        console.log(_selectedContact);
        cache.writeData({data:{showEditModal: true,selectedContact: _selectedContact }});
        return true
        
      },
      addContact: (parent,variables, {cache}) => {
        const query = gql`
          query GetContacts {
            contacts  @client {
              id
              name
              phone
              email
              img

            }
          }
        `; 
        const name = variables.name;
        const email = variables.email;
        const phone = variables.phone;
        const img = 'images/faces/' + Math.floor(Math.random() * (15-1) + 1) + '.jpg';

        const previous = cache.readQuery({query});
        let newId = 1;
        if(previous.contacts.length) {
           newId = previous.contacts[previous.contacts.length - 1].id + 1 ;
        }

        const newContact = { id: newId, name,phone,email,img, __typename: 'ContactItem' };

        const data = {
          contacts: [...previous.contacts,newContact],

        };
        cache.writeQuery({query, data});
      
      },
      editContact: (parent,variables, {cache}) => {
          const id = `ContactItem:${variables.id}`;
          console.log("log",variables);
          const fragment = gql`
          fragment selectedContact on ContactItem {
              id
              name
              phone
              email
          }
      `;
      const _selectedContact = cache.readFragment({fragment,id});
      const data = {..._selectedContact,name: variables.name,email: variables.email, phone: variables.phone }
        cache.writeFragment({ fragment, id, data });
    
          return null

      },
      deleteContact: (parent,variables, { cache }) => {
        const query = gql`
          query GetContacts {
            contacts  @client {
              id
              name
              phone
              email
              img

            }
          }
        `; 
        const prevContacts = cache.readQuery({query});
        const contacts = prevContacts.contacts;
        const newData = contacts.filter(item => item.id !== variables.id);
        console.log(newData);
        const data = {
          contacts: newData,

        };
        cache.writeQuery({query, data});

      },
  }
}
