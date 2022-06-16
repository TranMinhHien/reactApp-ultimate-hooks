import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
    const [title, setTitle] = useState('')

    // Load context theme
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme

    // Load context todos
    const { addTodo } = useContext(TodoContext)

    // Style
    const style = isLightTheme ? light : dark

    // For this component only
    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: uuidv4(),
            title,
            completed: false
        })
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder='Enter a new todo...'
                onChange={onTitleChange}
                value={title}
                required
            />
            <input type="submit" value="Add" style={style} />
        </form>
    )
}

export default TodoForm