import React from 'react';
import Cov from '../../../hoc/Cov';
import Button from '../../UI/Button/Button';

const orderSumary = (props) => {
  const ingredientSumary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span>{igKey}</span> : {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Cov>
      <h3>your order</h3>
      <ul>{ingredientSumary}</ul>
      <p>Total Price : {props.price.toFixed(2)} $</p>
      <p>continue to Checkout</p>
      <Button btnType='Danger' clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        Purchase
      </Button>
    </Cov>
  );
};
export default orderSumary;
