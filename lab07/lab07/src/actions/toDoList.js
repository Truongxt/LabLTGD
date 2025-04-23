export const addToDo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }
}

export const removeToDo = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: id
    }
}
export const toggleToDo = (id) => {
    return {
        type: "TOGGLE_TODO",
        payload: id
    }
}

