// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text,
      price: 5,
      quantity: 1
    }
  };
}

export function addItem(item) {

  console.log('in action item ', item)

  return {
    type: 'ADD_ITEM',
    payload: {
      id: uid(),
      isDone: false,
      text: item.text,
      price: parseFloat(item.price),
      quantity: parseInt(item.qty)
    }
  };
}

export function removeItem(id) {
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}

export function increaseQty(id) {
  console.log('trying to do inc')
  return {
    type: 'INCREASE_QTY',
    payload: {
      id: id,
      qty: 1
    }
  }
}

export function decreaseQty(id) {
  return {
    type: 'DECREASE_QTY',
     payload: {
      id: id,
      qty: 1
    }
  }
}