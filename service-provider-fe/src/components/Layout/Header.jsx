import React, { useContext, useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AuthContext from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo.png';
import { fetchUserProfile } from '../../redux/slices/authSlice.js';
import { fetchHomeServices } from '../../redux/slices/homeServiceSlice.js';
import { fetchCleaningServices } from '../../redux/slices/cleaningServicesSlice.js';
import { fetchPersonalServices } from '../../redux/slices/personalServiceSlice.js';
import { fetchSolarServices } from '../../redux/slices/solarServiceSlice.js';
import { fetchHomeInspections } from '../../redux/slices/homeInspectionSlice.js';
import {
    getHomeServices,
    getCleaningServices,
    getPersonalServices,
    getSolarServices,
    getHomeInspections,
} from '../../redux/selectors/serviceSelectors';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomeServices());
        dispatch(fetchCleaningServices());
        dispatch(fetchPersonalServices());
        dispatch(fetchSolarServices());
        dispatch(fetchHomeInspections());
    }, [dispatch]);

    const homeServices = useSelector(getHomeServices);
    const cleaningServices = useSelector(getCleaningServices);
    const personalServices = useSelector(getPersonalServices);
    const solarServices = useSelector(getSolarServices);
    const homeInspections = useSelector(getHomeInspections);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleProfileClick = () => {
        dispatch(fetchUserProfile());
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
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
                    <div className="md:flex md:items-center md:space-x-4 space-y-2 md:space-y-0 flex-col md:flex-row relative">
                        <Button color="inherit" component={Link} to="/" className="text-black hover:text-gray-500">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/about" className="text-black hover:text-gray-500">
                            About
                        </Button>
                        <div
                            className="relative group"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <Button
                                color="inherit"
                                className="text-black hover:text-gray-500 inline-flex items-center"
                            >
                                Services
                                <svg
                                    className="ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                            {dropdownOpen && (
                                <ul className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <li className="font-bold px-4 py-2">Home Services</li>
                                    {homeServices.map((service) => (
                                        <li key={service.id} className="mb-2 last:mb-0 px-4 py-2">
                                            <Link
                                                to={`/services/home/${service.id}`}
                                                className="text-black hover:text-gray-500 block"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="font-bold px-4 py-2">Cleaning Services</li>
                                    {cleaningServices.map((service) => (
                                        <li key={service.id} className="mb-2 last:mb-0 px-4 py-2">
                                            <Link
                                                to={`/services/cleaning/${service.id}`}
                                                className="text-black hover:text-gray-500 block"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="font-bold px-4 py-2">Personal Services</li>
                                    {personalServices.map((service) => (
                                        <li key={service.id} className="mb-2 last:mb-0 px-4 py-2">
                                            <Link
                                                to={`/services/personal/${service.id}`}
                                                className="text-black hover:text-gray-500 block"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="font-bold px-4 py-2">Solar Services</li>
                                    {solarServices.map((service) => (
                                        <li key={service.id} className="mb-2 last:mb-0 px-4 py-2">
                                            <Link
                                                to={`/services/solar/${service.id}`}
                                                className="text-black hover:text-gray-500 block"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="font-bold px-4 py-2">Home Inspections</li>
                                    {homeInspections.map((service) => (
                                        <li key={service.id} className="mb-2 last:mb-0 px-4 py-2">
                                            <Link
                                                to={`/services/inspection/${service.id}`}
                                                className="text-black hover:text-gray-500 block"
                                            >
                                                {service.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
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
