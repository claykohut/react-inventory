import React from 'react';

import { Control, Form } from 'react-redux-form';

var NumberFormat = require('react-number-format');


export function Todo(props) {
  const { todo } = props;
  return (
    <div className="item-info">
      <span className="item-name">{todo.text}</span>
      <span className="item-brand">{todo.brand}</span>
      <NumberFormat className="item-price" value={todo.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      <span className="item-qty">{todo.quantity}</span>
    </div>
  );
}

export function PriceDisplay(props) {
  const { todos } = props;
  var totalPrice = 0
  for(var x in todos){
    totalPrice += todos[x].price * todos[x].quantity
  }

  if( ! totalPrice ){
    totalPrice = 0.0
  }

  if( totalPrice > 0 ){
    return (
      <div className="total-price-wrap">
        <span className="total-price">Total: <NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
      </div>
    );
  } else {
    return (
      <div className="total-price-wrap">
        <span className="total-price">Total: $0</span>
      </div>)
  }
  
}

export function InventoryList(props) {
  const { todos, removeItem, increaseQty, decreaseQty } = props;

  const deleteItem = id => event => removeItem(id);

  const incQty = id => event => increaseQty(id);
  const decQty = id => event => decreaseQty(id);

  return (
    <div className='list'>
      <PriceDisplay todos={todos.toJS()} />
   
      <ul className='inventory__list'>
        {todos.map(t => (
          <li key={t.get('id')}
              className='list__item'>
            <Todo todo={t.toJS()} />

            <div className="qty-control-wrap">
              <i className="fa fa-plus-circle add-button qty-btn" 
               aria-hidden="true"
               onClick={incQty(t.get('id'))}></i>
               
              <i className="fa fa-minus-circle minus-button qty-btn" 
               aria-hidden="true"
               onClick={decQty(t.get('id'))}></i>
            </div>

            <i className="fa fa-times delete-button" 
               aria-hidden="true"
               onClick={deleteItem(todos.indexOf(t))}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}