import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo, removeTodo, increaseQty, decreaseQty } from './actions';

import { Control, Form } from 'react-redux-form';

import * as forms from './components/my-form-component';


export const InventoryList = connect(
  function mapStateToProps(state) {
    console.log('state ', state)
    return { todos: state.list };
  },
  function mapDispatchToProps(dispatch) {
    return {
	   addTodo: text => dispatch(addTodo(text)),
	   toggleTodo: id => dispatch(toggleTodo(id)),
	   removeTodo: index => dispatch(removeTodo(index)),
     increaseQty: id => dispatch(increaseQty(id)),
     decreaseQty: id => dispatch(decreaseQty(id))
	};
  }
)(components.InventoryList);

export const MainForm = connect(
  function mapStateToProps(state) {
    console.log('state ', state)
    return { form: state.form };
  },
  function mapDispatchToProps(dispatch) {
    return {
     addTodo: text => dispatch(addTodo(text)),
     toggleTodo: id => dispatch(toggleTodo(id)),
     removeTodo: index => dispatch(removeTodo(index)),
     increaseQty: id => dispatch(increaseQty(id)),
     decreaseQty: id => dispatch(decreaseQty(id))
  };
  }
)(forms.MainForm);