import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODO } from "../reducers/types";
//import { v4 as uuidv4 } from 'uuid'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    // State
    //const [todos, setTodos] = useState([])

    const [todos, dispatch] = useReducer(todoReducer, [])

    //useEffect
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null,
        })
    }, [])

    useEffect(() => {
        dispatch({
            type: SAVE_TODO,
            payload: { todos }
        })
    }, [todos])

    // Func
    // const addTodo = todo => {
    //     setTodos([...todos, todo])
    // }

    // const deleteTodo = id => {
    //     setTodos(todos.filter(todo => todo.id !== id))
    // }

    const todoContextData = {
        todos,
        dispatch
    }

    // Return provider
    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider