const { createStore, combineReducers } = require("redux");
// products variable
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart variable
const GET_CART_ITEM = "GET_CART_ITEM";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// product initial
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct: 2,
};

// cart initial
const initialCartState = {
  carts: ["sugar"],
  numberOfCart: 1,
};

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

const getCarts = () => {
  return {
    type: GET_CART_ITEM,
  };
};
const addCart = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: item,
  };
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
      return state;
  }
};
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        carts: [...state.carts, action.payload],
        numberOfCart: state.numberOfCart + 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

//store
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(getProducts());
// store.dispatch(addProducts("potetos"));
// store.dispatch(getProducts());
store.dispatch(getCarts());
store.dispatch(addCart("potetos"));
store.dispatch(getCarts());
