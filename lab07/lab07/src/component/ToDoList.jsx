import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addToDo,removeToDo,toggleToDo } from "../actions/toDoList";

function ToDoList() {
    // This is a simple To-Do List component that allows users to add, delete, and check off tasks.
    const toDoApp = useSelector((state) => state.toDoList)
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");


    const hanleAddTask = () => {
        const data = {
            id: new Date(),
            title,
            completed: false
        }
        dispatch(addToDo(data))
        setTitle("")
    }
    const handleDeleteTask = (id) => {

        dispatch(removeToDo(id))
    }
    const handleToggleTask = (id) => {
        dispatch(toggleToDo(id))
    }

    console.log(toDoApp)
    return (
        <div>
            
            <h1>To-Do List</h1>
            <input type="text" placeholder="Add a new task" value={title} onChange={(e) => setTitle(e.target.value)}  />
            <button onClick={hanleAddTask}>Add</button>
            <ul>
                {toDoApp.map((value) => {
                    return (
                        <li key={value.id}>
                            <input type="checkbox" checked={value.completed}  onChange={() => handleToggleTask(value.id)} />
                             <span style={{ textDecoration: value.completed ? "line-through" : "" }} >{value.title}</span>
                            <button onClick={() => handleDeleteTask(value.id)} style={{ marginLeft: "10px", fontSize: "14px" }}>❌</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoList
