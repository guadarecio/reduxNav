const DATA = [
  {
    id: 1,
    title: 'Cook the lunch',
    description: 'sdadasdas',
    creationDate: '12.02',
    done: false,
  },
  {
    id: 2,
    title: 'Work',
    description: 'sdadasdas',
    creationDate: '12.02',
    done: true,
  },
  {
    id: '3',
    title: 'Take the shower',
    description: 'sdadasdas',
    creationDate: '12.02',
    done: false,
  },
];

const reducerApp = (state = DATA, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload];
    }
    case 'EDIT_TODO': {
      return [...state, action.payload];
    }

    case 'DELETE_TODO': {
      const filteredTodos = state.filter(todo => todo.id !== action.payload);

      return filteredTodos;
    }

    default:
      return state;
  }
};

export default reducerApp;
