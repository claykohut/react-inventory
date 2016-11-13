import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';


class MyForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }


  render() {
    return (
      <Form model="form.user" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Your name?</label>
        <Control.text model="form.user.name" />
        <button>Submit!</button>
      </Form>
    );
  }
}

// No need to connect()!
export default MyForm 

export function MainForm(props) {
  const { todos, toggleTodo, addTodo, removeTodo, increaseQty, decreaseQty } = props;

  const handleSubmit = function(val){
    // Do anything you want with the form value
    console.log(val);
    addTodo(val.name);
  }

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

  const incQty = id => event => increaseQty(id);
  const decQty = id => event => decreaseQty(id);

  return (
    <Form model="form.user" onSubmit={(val) => handleSubmit(val)}>
      <label>Your name?</label>
      <Control.text model="form.user.name" />
      <button>Submit!</button>
    </Form>
  );
}