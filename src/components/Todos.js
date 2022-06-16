import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { TodoContext } from '../contexts/TodoContext'
import { AuthContext } from '../contexts/AuthContext'

const Todos = () => {
    // Load context todos
    const { todos } = useContext(TodoContext)

    // Load context auth
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div className='todo-list'>

            {isAuthenticated ? (
                <>
                    <TodoForm />
                    <ul>
                        {todos.map(todo => (
                            <TodoItem todo={todo} key={todo.id} />
                        ))}
                    </ul>
                </>
            ) : (
                <p style={{ textAlign: 'center' }}>Not authorised</p>
            )}
        </div>
    )
}

export default Todos