import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./components/services/reducers/todosReducer";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
