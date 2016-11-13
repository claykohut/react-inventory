import React from 'react';
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';

export function MainForm(props) {

 // console.log('form props ', props)

  const { addItem, resetForm } = props;

  const checkForm = function(val){
    if( val.name.length > 0 && val.brand.length > 0 && val.price >= 0 && val.qty > 0 ){
      return true
    } else {
      return false
    }
  }

  const handleSubmit = function(val){
    // Do anything you want with the form value
   // console.log('submit this ', this)

      if( checkForm(val) ){
        addItem({ 
          text: val.name,
          brand: val.brand,
          price: val.price,
          qty: val.qty
        });

        resetForm('user')
      } else {
        console.log('form incomplete!')
        return false
      }
      
  }

  return (
    <Form model="form.user" onSubmit={(val) => handleSubmit(val)}>

      <div className="form-row">
        <label>Name:</label>
        <Control.text placeholder="Item" model="form.user.name" />
      </div>

      <div className="form-row">
        <label>Brand:</label>
        <Control.text placeholder="Brand" model="form.user.brand" />
      </div>

      <div className="form-row">
        <label>Price:</label>
        <Control.text placeholder="Price" type='number'
          step='1' min="0" model="form.user.price" />
      </div>
      <div className="form-row">
        <label>Quantity:</label>
        <Control.text type='number' placeholder="Quantity"
            step='1' min="0" model="form.user.qty" />
      </div>
      <button>Submit!</button>

    </Form>
  );
}