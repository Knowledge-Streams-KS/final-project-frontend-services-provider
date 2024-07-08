import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout, registerUser, setUser, updateUserProfile as updateUserProfileAction } from '../redux/slices/authSlice.js';
import API from '../utils/apiConfig.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            dispatch(setUser({ token }));
        }
    }, [dispatch]);

    const login = async (data) => {
        const result = await dispatch(loginUser(data));
        if (result.payload.token) {
            localStorage.setItem('authToken', result.payload.token);
            API.defaults.headers.common['Authorization'] = `Bearer ${result.payload.token}`;
            dispatch(setUser(result.payload));
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('authToken');
        delete API.defaults.headers.common['Authorization'];
        dispatch(logout());
    };

    const register = (data) => {
        return dispatch(registerUser(data));
    };

    const updateProfile = (data) => {
        return dispatch(updateUserProfileAction(data));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout: logoutUser, register, updateUserProfile: updateProfile, loading, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
