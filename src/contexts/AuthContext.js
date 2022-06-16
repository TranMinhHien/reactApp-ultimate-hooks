import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    // State
    const [isAuthenticated, setAuthentication] = useState(false)

    // useEffect
    useEffect(() => {
        alert(
            isAuthenticated
                ? 'Login Successful'
                : 'You are logged out. Please login to see todos.'
        )
    }, [isAuthenticated])

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated)
    }

    // Context data
    const authContextData = {
        isAuthenticated,
        toggleAuth
    }

    // return
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider