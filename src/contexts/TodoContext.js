import React, { createContext, useState, useEffect } from "react";
//import { v4 as uuidv4 } from 'uuid'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    // State
    const [todos, setTodos] = useState([])

    //useEffect
    useEffect(() => {
        console.log('getting todos')
        const todos = localStorage.getItem('todos')
        if (todos) setTodos(JSON.parse(todos))
    }, [])

    useEffect(() => {
        console.log('saving todos')
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // Func
    const addTodo = todo => {
        setTodos([...todos, todo])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const todoContextData = {
        todos,
        addTodo,
        deleteTodo
    }

    // Return provider
    return (
        <TodoContext.Provider value={todoContextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider