import React from 'react';
import { connect } from 'react-redux';
import { Control, Form } from 'react-redux-form';

export function MainForm(props) {
  const { todos, toggleTodo, addTodo, removeTodo, increaseQty, decreaseQty } = props;

  const handleSubmit = function(val){
    // Do anything you want with the form value
    console.log(val, ' brand ', val.brand);
    console.log('submit event')
    addTodo(val.name + ' ' + val.brand);
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


  return (
    <Form model="form.user" onSubmit={(val) => handleSubmit(val)}>
      <label>Your name?</label>
      <Control.text model="form.user.name" />
      <Control.text model="form.user.brand" />
      <button>Submit!</button>
    </Form>
  );
}