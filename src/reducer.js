import { List, Map } from 'immutable';

const init = List([]);

export default function(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
		return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
       return todos.map(t => {
		 	if(t.get('id') === action.payload) {
		 		console.log('toggling.. ', action.payload)
		 		return t.update('isDone', isDone => !isDone);
			} else {
				return t;
			}
		})
    case 'REMOVE_TODO':
	   console.log('remove index? ', action.payload)
       var index = action.payload
       return todos.splice(index, 1)
    default:
      return todos;
  }
}