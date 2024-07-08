import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import { fetchUserProfile } from '../../redux/slices/authSlice';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation()
    const dispatch = useDispatch()

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleProfileClick = () => {
        dispatch(fetchUserProfile())
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AppBar position="static" color="default" className="shadow-md">
            <Toolbar className="flex justify-between">
                <Typography variant="h6" className="flex items-center">
                    <img src={logo} alt="Company Logo" className="h-8 mr-2 rounded-full" />
                    <Link to="/" className="text-black no-underline">
                        Service Provider
                    </Link>
                </Typography>
                <div className="md:hidden">
                    <IconButton onClick={toggleMenu} edge="start" color="inherit" aria-label="menu">
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <div className="md:flex md:items-center md:space-x-4 space-y-2 md:space-y-0 flex-col md:flex-row">
                        <Button color="inherit" component={Link} to="/" className="text-black hover:text-gray-500">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/about" className="text-black hover:text-gray-500">
                            About
                        </Button>
                        {location.pathname !== '/' && (
                            <Button color="inherit" component={Link} to="/services" className="text-black hover:text-gray-500">
                                Services
                            </Button>
                        )}
                        <Button color="inherit" component={Link} to="/testimonials" className="text-black hover:text-gray-500">
                            Testimonials
                        </Button>
                        <Button color="inherit" component={Link} to="/contact" className="text-black hover:text-gray-500">
                            Contact
                        </Button>
                        {user ? (
                            <>
                                <Button color="inherit" component={Link} to="/profile" className="text-black hover:text-gray-500" onClick={handleProfileClick}>
                                    Profile
                                </Button>
                                <Button color="inherit" component={Link} to="/bookings" className="text-black hover:text-gray-500">
                                    My Bookings
                                </Button>
                                <Button color="inherit" onClick={handleLogout} className="text-black hover:text-gray-500">
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button color="inherit" component={Link} to="/login" className="text-black hover:text-gray-500">
                                    Login
                                </Button>
                                <Button color="inherit" component={Link} to="/register" className="text-black hover:text-gray-500">
                                    Register
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
