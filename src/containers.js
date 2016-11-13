import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo, removeTodo, increaseQty, decreaseQty } from './actions';

export const InventoryList = connect(
  function mapStateToProps(state) {
    return { todos: state };
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