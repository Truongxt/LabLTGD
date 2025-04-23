const init = []

export const toDoListReducer = (state = init, action) =>{
    switch(action.type){
        case "ADD_TODO":
            return [...state, action.payload]
        case "REMOVE_TODO":
            return state.filter((value) => value.id !== action.payload)
        case "TOGGLE_TODO":
            return state.map((value) => {
                if(value.id === action.payload){
                    return {...value, completed: !value.completed}
                }
                return value
            })
        default:
        return state
    }
}