import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { setCart } from './Utils/storageCart';

//REDUCERS IMPORT
import cartReducer from './Reducers/cartReducer'; 

import 'bootstrap/dist/css/bootstrap.min.css';

function logger({ getState }) {
  return next => action => {
    const returnValue = next(action);
    setCart(getState());

    return returnValue
  }
}

const store = createStore(
  cartReducer,
  compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);