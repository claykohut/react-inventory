import { List, Map } from 'immutable';

const init = List([]);

export default function(items=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
    	//console.log('adding.. ', action.payload)
		return items.push(Map(action.payload));
    case 'REMOVE_ITEM':
	   //console.log('remove index? ', action.payload)
       var index = action.payload
       return items.splice(index, 1)
	case 'INCREASE_QTY':
		//console.log('do inc qty! ', action.payload)
		return items.map(t => {
		 	if(t.get('id') === action.payload.id) {

		 		return t.update('quantity', function(quantity){
		 			quantity = quantity + action.payload.qty
		 			//console.log('qty now ', quantity)
		 			return quantity
		 		});
			} else {
				return t;
			}
		})
	case 'DECREASE_QTY':
		//console.log('do dec qty!')
		return items.map(t => {
		 	if(t.get('id') === action.payload.id && t.get('quantity') > 0) {

		 		return t.update('quantity', function(quantity){
		 			quantity = quantity - action.payload.qty
		 			return quantity
		 		});
			} else {
				return t;
			}
		})
	case 'ADD_ITEM':
		//console.log('adding item.. ', action.payload)
		return items.push(Map(action.payload));
    default:
	    //console.log('doing default action..')
      return items;
  }
}