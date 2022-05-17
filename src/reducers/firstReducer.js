export const initialState = {
  total: 0,
  products: [],
};

const firstReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      console.log('added', payload);
      return {
        ...state,
        products: payload.products,
      };
    case 'REMOVE_FROM_CART':
      console.log('REMOVE', payload);
      return {
        ...state,
        products: payload.products,
      };
    case 'UPDATE_PRICE':
      console.log('UPDATE', payload);
      return {
        ...state,
        total: payload.total,
      };

    default:
      throw new Error(`${type} is not in our cases`);
  }
};

export default firstReducer;
