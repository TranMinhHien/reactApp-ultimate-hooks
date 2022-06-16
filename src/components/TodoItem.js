import React, { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from '../contexts/TodoContext';

const TodoItem = ({ todo}) => {
    //const todo = props.todo

    // Load context theme
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme

    // Load context todos
    const { deleteTodo } = useContext(TodoContext)

    // Style
    const style = isLightTheme ? light : dark

    return (
        <div>
            <li onClick={() => {
                deleteTodo(todo.id)
            }} style={style}>{todo.title} </li>
        </div>
    )
}

export default TodoItem