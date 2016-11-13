import React from 'react';

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
    totalPrice += todos[x].price
  }
  return <span>{ totalPrice }</span>;
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo, removeTodo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);

  const deleteItem = id => event => removeTodo(id);

  return (
    <div className='todo'>
      <PriceDisplay todos={todos.toJS()} />
      <input type='text'
             className='todo__entry'
             placeholder='Add todo'
             onKeyDown={onSubmit} />
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.get('id')}
              className='todo__item'>
            <Todo todo={t.toJS()} />
            <i className="fa fa-times delete-button" 
               aria-hidden="true"
               onClick={deleteItem(todos.indexOf(t))}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}