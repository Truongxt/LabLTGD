import { combineReducers } from "redux"
import counter from "./counter";
export const allReducers = combineReducers({
    counter
});

console.log(counter)

export default allReducers