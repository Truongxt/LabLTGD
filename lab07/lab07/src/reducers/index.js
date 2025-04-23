import { combineReducers } from "redux"
import counter from "./counter";
import { toDoListReducer } from "./toDoList";
export const allReducers = combineReducers({
    counter, 
    toDoList: toDoListReducer,
});


export default allReducers