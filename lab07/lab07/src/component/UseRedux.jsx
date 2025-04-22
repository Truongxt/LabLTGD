import { useReducer } from "react"
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions/counter";
export default function UseRedux(){
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
                <div>
                        <span>{counter}</span>
                        <button onClick={() => dispatch(increment())}>Tăng</button>
                        <button onClick={() => dispatch(decrement())}>Giảm</button>
                </div>
        </>
    )
}