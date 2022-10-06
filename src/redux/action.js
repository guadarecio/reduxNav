const add = newTodo => {
  return {
    type: 'ADD_TODO',
    payload: newTodo,
  };
};
const edit = id => {
  console.log(edit);
  return {
    type: 'EDIT_TODO',
    payload: id,
  };
};
const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};

export {add, deleteTodo, edit};
