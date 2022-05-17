import { createContext, useReducer } from 'react';
import firstReducer, { initialState } from '../reducers/firstReducer';

const firstContext = createContext(initialState);

const FirstProvider = ({ children }) => {
  const [state, dispatch] = useReducer(firstReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.product.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currenctProduct) => currenctProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        product: updatedCart,
      },
    });
  };

  const updatePrice = (product) => {
    let total = 0;
    product.forEach((product) => (total += product.price));
    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total, // this is like > total:total
      },
    });
  };
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };
  return (
    <firstContext.Provider value={value}> {children}</firstContext.Provider>
  );
};
