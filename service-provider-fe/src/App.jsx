import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AppRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <Provider store={store}>
        <AuthProvider>
            <Router>
                <Header />
                <AppRoutes />
                <Footer />
            </Router>
            <ToastContainer />
        </AuthProvider>
    </Provider>
);

export default App;
