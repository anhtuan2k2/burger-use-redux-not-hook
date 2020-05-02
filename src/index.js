import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

// Store sẽ chia làm 2 phần :
// 1 folder actions :
// 	-actionTypes :    export const ADD_INGREDIENT = 'ADD_INGREDIENT';
// 	-burgerbuilder: export const addIngredient = ( name ) => {
//  			   return {
//      				   type: actionTypes.ADD_INGREDIENT,
//        					 ingredientName: name
//    			   };
// 			};
// 	nơi này như kiểu gán kiểu và value . và có thể thực hiện các get post to API chạy asyn ex :

// export const initIngredients = () => {
//     return dispatch => {
//       axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
//           .then( response => {
//              dispatch(setIngredients(response.data));
//           } )
//           .catch( error => {
//               dispatch(fetchIngredientsFailed());
//           } );
//   };
// };

// 	-index.js : export {                 ở đây export function
//     	           	addIngredient,
//    			        removeIngredient,
// 			            initIngredients
// 			        } from './burgerBuilder';
// 		export {
// 		    purchaseBurger,
//  		   purchaseInit,
//  		   fetchOrders
// 		} from './order';
// 1 folder reducers:
