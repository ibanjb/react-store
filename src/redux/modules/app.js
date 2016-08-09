export const ADD_TO_SHOPPING_CART = 'redux-training/app/ADD_TO_SHOPPING_CART';

const initialState = {
  shoppingCart: {
    id001: {
      description: 'this is a dummy product',
    },
    id002: {
      description: 'this is another dummy product',
    },
  },
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
    case ADD_TO_SHOPPING_CART:
      return { ...state, shoppingCart: action.shoppingCart };

    default:
      return state;
  }
}

export function addToShoppingCart(shoppingCart) {
  return { type: ADD_TO_SHOPPING_CART, shoppingCart };
}
