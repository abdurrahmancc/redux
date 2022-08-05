const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
// products variable
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// product initial
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProduct: 2,
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

const rootReducer = combineReducers({
  productR: productReducer,
});

//store
const store = createStore(rootReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("potetos"));
store.dispatch(getProducts());
