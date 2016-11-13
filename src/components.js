import React from 'react';

import { Control, Form } from 'react-redux-form';

var NumberFormat = require('react-number-format');


export function ListItem(props) {
  const { item } = props;
  return (
    <div className="item-info">
      <span className="item-name">{item.text}</span>
      <span className="item-brand">{item.brand}</span>
      <NumberFormat className="item-price" value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      <span className="item-qty">{item.quantity}</span>
    </div>
  );
}

export function PriceDisplay(props) {
  const { items } = props;
  var totalPrice = 0
  for(var x in items){
    totalPrice += items[x].price * items[x].quantity
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
  const { items, removeItem, increaseQty, decreaseQty } = props;

  const deleteItem = id => event => removeItem(id);

  const incQty = id => event => increaseQty(id);
  const decQty = id => event => decreaseQty(id);

  return (
    <div className='list'>
      <PriceDisplay items={items.toJS()} />
   
      <ul className='inventory__list'>
        {items.map(t => (
          <li key={t.get('id')}
              className='list__item'>
            <ListItem item={t.toJS()} />

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
               onClick={deleteItem(items.indexOf(t))}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}