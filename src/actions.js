// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);

export function addItem(item) {

  return {
    type: 'ADD_ITEM',
    payload: {
      id: uid(),
      text: item.text,
      brand: item.brand,
      price: item.price,
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