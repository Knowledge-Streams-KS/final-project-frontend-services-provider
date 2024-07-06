import React, { createContext } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logout } from '../redux/slices/authSlice.js'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const loading = useSelector((state) => state.auth.loading)
    const error = useSelector((state) => state.auth.error)

    const login = (data) => {
        dispatch(loginUser(data))
    }
    const logoutUser = () => {
        dispatch(logout())
    }

    return (
        < AuthContext.Provider value={{ user, login, logout: logoutUser, loading, error }
        }>
            {children}
        </AuthContext.Provider >
    )

}

export default AuthContext