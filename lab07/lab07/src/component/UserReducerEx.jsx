import { useReducer } from "react"

const reducer = (state = 0,action) =>{
    switch(action){
        case "UP":
            return state +1;
        case "DOWN":{
            return state -1;
        }
    }
}

export default function UserReducerEx(){
    const [state,dispatch] = useReducer(reducer,0);
    return (
        <>
                <div>
                        <span>{state}</span>
                        <button onClick={() => dispatch("UP")}>Tăng</button>
                        <button onClick={() => dispatch("DOWN")}>Giảm</button>
                </div>
        </>
    )
}