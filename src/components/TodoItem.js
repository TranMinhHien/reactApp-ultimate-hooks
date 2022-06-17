import React, { useContext } from 'react'
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from '../contexts/TodoContext';
import { DELETE_TODO } from '../reducers/types';

const TodoItem = ({ todo }) => {
    //const todo = props.todo

    // Load context theme
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme

    // Load context todos
    const { dispatch } = useContext(TodoContext)

    // Style
    const style = isLightTheme ? light : dark

    return (
        <div>
            <li onClick={() => {
                dispatch({
                    type: DELETE_TODO,
                    payload: {
                        id: todo.id
                    }
                })
            }} style={style}>{todo.title} </li>
        </div>
    )
}

export default TodoItem