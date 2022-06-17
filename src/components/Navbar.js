import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { TOGGLE_AUTH } from "../reducers/types";

const Navbar = () => {

    // Load context theme
    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme

    // Load context auth
    const { isAuthenticated, dispatch } = useContext(AuthContext)

    // Style
    const style = isLightTheme ? light : dark

    return (
        <div className="navbar" style={style}>
            <h1>My App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? 'You are logged in' : ''}
                    <button onClick={() => {dispatch({
                        type: TOGGLE_AUTH,                        
                    })}}>
                        {isAuthenticated ? 'Logout' : 'Login'}
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar