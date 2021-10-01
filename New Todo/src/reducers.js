import { combineReducers } from "redux-immer";
import { produce } from "immer";
import todos from "./store/todos/reducer";


export default combineReducers(produce, {
  Todo: todos
})