// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text,
      price: 5
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    payload: id
  }
}