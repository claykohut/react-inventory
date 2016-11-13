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
	case 'INCREASE_QTY':
		console.log('do inc qty! ', action.payload)
		return todos.map(t => {
		 	if(t.get('id') === action.payload.id) {
		 		console.log('toggling.. ', action.payload)
		 		return t.update('quantity', function(quantity){
		 			quantity = quantity + action.payload.qty
		 			console.log('qty now ', quantity)
		 			return quantity
		 		});
			} else {
				return t;
			}
		})
	case 'DECREASE_QTY':
		console.log('do dec qty!')
		return todos.map(t => {
		 	if(t.get('id') === action.payload.id && t.get('quantity') > 0) {
		 		console.log('doing.. ', action.payload)
		 		return t.update('quantity', function(quantity){
		 			quantity = quantity - action.payload.qty
		 			console.log('qty now ', quantity)
		 			return quantity
		 		});
			} else {
				return t;
			}
		})
    default:
	    console.log('doing default action..')
      return todos;
  }
}