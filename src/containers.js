import { connect } from 'react-redux';
import * as components from './components';
import { addItem, removeItem, increaseQty, decreaseQty } from './actions';

import { Control, Form, actions } from 'react-redux-form';

import * as forms from './components/form';


export const InventoryList = connect(
  function mapStateToProps(state) {
    return { todos: state.list };
  },
  function mapDispatchToProps(dispatch) {
    return {
	   removeItem: index => dispatch(removeItem(index)),
     increaseQty: id => dispatch(increaseQty(id)),
     decreaseQty: id => dispatch(decreaseQty(id))
	};
  }
)(components.InventoryList);

export const MainForm = connect(
  function mapStateToProps(state) {
    return { form: state.form };
  },
  function mapDispatchToProps(dispatch) {
    return {
     addItem: item => dispatch(addItem(item)),
     resetForm: model => dispatch(actions.reset('form.user'))
  };
  }
)(forms.MainForm);