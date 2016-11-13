import React from 'react';

import { Control, Form } from 'react-redux-form';

export function Todo(props) {
  const { todo } = props;
  if(todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function PriceDisplay(props) {
  const { todos } = props;
  var totalPrice = 0
  for(var x in todos){
    totalPrice += todos[x].price * todos[x].quantity
  }
  return <span>{ totalPrice }</span>;
}

export function InventoryList(props) {
  const { todos, toggleTodo, removeTodo, increaseQty, decreaseQty } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      //addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);

  const deleteItem = id => event => removeTodo(id);

  const incQty = id => event => increaseQty(id);
  const decQty = id => event => decreaseQty(id);

  return (
    <div className='todo'>
      <PriceDisplay todos={todos.toJS()} />
   
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.get('id')}
              className='todo__item'>
            <Todo todo={t.toJS()} />

            <i className="fa fa-plus add-button" 
               aria-hidden="true"
               onClick={incQty(t.get('id'))}></i>
               
            <i className="fa fa-minus minus-button" 
               aria-hidden="true"
               onClick={decQty(t.get('id'))}></i>

            <i className="fa fa-times delete-button" 
               aria-hidden="true"
               onClick={deleteItem(todos.indexOf(t))}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}