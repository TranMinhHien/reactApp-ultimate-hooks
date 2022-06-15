import React, { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

const TodoItem = ({ todo, deleteTodo }) => {
    //const todo = props.todo

    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme
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