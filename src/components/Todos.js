import React, { useState, useContext } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid'

const Todos = () => {
    
    const [todos, setTodos] = useState([
        { id: uuidv4(), title: 'Todo 1', completed: false },
        { id: uuidv4(), title: 'Todo 2', completed: false },
        { id: uuidv4(), title: 'Todo 3', completed: false },
    ])

    // Func
    const addTodo = todo => {
        setTodos([...todos, todo])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='todo-list'>
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    )
}

export default Todos