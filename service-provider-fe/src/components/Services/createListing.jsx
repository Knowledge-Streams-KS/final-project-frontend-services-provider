import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { createServiceListing } from '../../redux/slices/serviceSlice.js';
import { fetchUserProfile } from "../../redux/slices/authSlice.js";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import API from '../../utils/apiConfig.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faFileAlt, faRupeeSign, faMapMarkerAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';

const CreateListing = () => {
    const [categories, setCategories] = useState([]);
    const [locations, setLocations] = useState([]);
    const [providers, setProviders] = useState([]);
    const [form, setForm] = useState({
        serviceName: '',
        description: '',
        price: '',
        categoryId: '',
        locationId: '',
        providerId: ''
    });
    const [serviceName, setServiceName] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const location = useLocation();
    const redirectTo = new URLSearchParams(location.search).get('redirectTo');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await API.get('/category');
            setCategories(response.data);
            setForm((prevForm) => ({
                ...prevForm,
                categoryId: response.data.length > 0 ? response.data[0].id : ''
            }));
        };
        const fetchLocations = async () => {
            const response = await API.get('/locations/get-location');
            setLocations(response.data);
            setForm((prevForm) => ({
                ...prevForm,
                locationId: response.data.length > 0 ? response.data[0].id : ''
            }));
        };
        const fetchProviders = async () => {
            const response = await API.get('/providers/get-provider');
            setProviders(response.data);
            setForm((prevForm) => ({
                ...prevForm,
                providerId: response.data.length > 0 ? response.data[0].id : ''
            }));
        };
        fetchCategories();
        fetchLocations();
        fetchProviders();
        dispatch(fetchUserProfile());
    }, [dispatch]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.serviceName && form.categoryId && form.locationId && form.providerId) {
            const result = await dispatch(createServiceListing(form));
            if (result.payload) {
                setServiceName(form.serviceName);
                setShowSuccessModal(true);
            } else {
                // Handle error
            }
        } else {
            // Handle form validation errors
        }
    };

    if (!user) {
        return <div>You need to be logged in to create a listing.</div>;
    }

    if (user.role !== 'provider') {
        return <div>You do not have permission to create a listing.</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-700">Create Service Listing</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceName">Service Name</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
                        <FontAwesomeIcon icon={faTag} className="text-gray-500 mr-3" />
                        <input
                            type="text"
                            name="serviceName"
                            value={form.serviceName}
                            onChange={handleChange}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            placeholder="Enter service name"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
                        <FontAwesomeIcon icon={faFileAlt} className="text-gray-500 mr-3" />
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            placeholder="Enter service description"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Price</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
                        <FontAwesomeIcon icon={faRupeeSign} className="text-gray-500 mr-3" />
                        <input
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            placeholder="Enter service price"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoryId">Service Type</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
                        <select
                            name="categoryId"
                            value={form.categoryId}
                            onChange={handleChange}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            required
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.categoryName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationId">Location</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500 mr-3" />
                        <select
                            name="locationId"
                            value={form.locationId}
                            onChange={handleChange}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            required
                        >
                            {locations.map((location) => (
                                <option key={location.id} value={location.id}>{location.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="providerId">Provider</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
                        <FontAwesomeIcon icon={faUserTie} className="text-gray-500 mr-3" />
                        <select
                            name="providerId"
                            value={form.providerId}
                            onChange={handleChange}
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            required
                        >
                            {providers.map((provider) => (
                                <option key={provider.id} value={provider.id}>{provider.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Create Listing
                </button>
            </form>
            {showSuccessModal && <SuccessModal serviceName={serviceName} onClose={() => setShowSuccessModal(false)} />}
        </div>
    );
};

const SuccessModal = ({ serviceName, onClose }) => {
    const handleClose = () => {
        onClose();
        // Redirect to a different page if needed
        navigate('/services'); // Example redirect
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Success!</h2>
                <p className="mb-4">The service "{serviceName}" has been created successfully.</p>
                <button
                    onClick={handleClose}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CreateListing;
