import gql from 'graphql-tag';
var nextTodoId = 1;
export const defaults = {
  showEditModal : false,
  showCreateModal : false,
  currentContactId : null
};

export const resolvers = {
  Mutation: {
    openEditModal: (_, { id }, { cache }) => {
      
    },
    addContact: (_, { text }, { cache }) => {
      const query = gql`
        query GetContacts {
          contacts @client {
            id
            text
            completed
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const newTodo = {
        id: nextTodoId++,
        text,
        completed: false,
        __typename: 'TodoItem',
      };
      const data = {
        todos: previous.todos.concat([newTodo]),
      };
      cache.writeData({ data });
      return newTodo;
    },
    toggleTodo: (_, variables, { cache }) => {
      const id = `TodoItem:${variables.id}`;
      const fragment = gql`
        fragment completeTodo on TodoItem {
          completed
        }
      `;
      const todo = cache.readFragment({ fragment, id });
      const data = { ...todo, completed: !todo.completed };
      cache.writeData({ id, data });
      return null;
    },
  },
};
