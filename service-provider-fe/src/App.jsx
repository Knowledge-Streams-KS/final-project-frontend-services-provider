import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AppRoutes from './routes';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Header />}
      <main className="flex-grow">{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          style={{ textAlign: 'center' }}
        />
      </Router>
    </AuthProvider>
  </Provider>
);

export default App;
