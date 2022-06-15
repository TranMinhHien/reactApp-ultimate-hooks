import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from "../contexts/ThemeContext";

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    // style
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme
    const style = isLightTheme ? light : dark

    // function
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