import gql from 'graphql-tag';
var nextTodoId = 1;
export const defaults = {
    contacts : [
        {
        id: 1,
        name : 'Terrence S. Hatfield',
        phone: '651-603-1723',
        email: 'TerrenceSHatfield@rhyta.com',
        __typename: 'ContactItem'
        },
        {
        id: 2,
        name : 'Chris M. Manning',
        phone: '513-307-5859',
        email: 'ChrisMManning@dayrep.com',
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
      return null
      
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

    }

  },
};
