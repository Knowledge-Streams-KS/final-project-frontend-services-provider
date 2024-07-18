import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { createServiceListing } from '../../redux/slices/serviceSlice.js';
import { fetchUserProfile } from "../../redux/slices/authSlice.js";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import API from '../../utils/apiConfig.js';

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
        providerId: '',
        image: null,
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
        const { name, value, files } = e.target;
        if (name === 'image') {
            setForm({
                ...form,
                image: files[0]
            });
        } else {
            setForm({
                ...form,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.serviceName && form.categoryId && form.locationId && form.providerId) {
            const formData = new FormData();
            for (const key in form) {
                formData.append(key, form[key]);
            }
            const result = await dispatch(createServiceListing(formData));
            if (result.payload) {
                setServiceName(form.serviceName);
                setShowSuccessModal(true);
            }
        }
    };

    if (!user) {
        return <div className="text-center text-gray-700 mt-10">You need to be logged in to create a listing.</div>;
    }

    if (user.role !== 'provider') {
        return <div className="text-center text-gray-700 mt-10">You do not have permission to create a listing.</div>;
    }

    return (
        <div className="max-w-lg mx-auto mt-10 bg-gray-200 p-8 rounded-lg shadow-lg mb-4">
            <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Create Service Listing</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="serviceName">Service Name</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
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
                <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="description">Description</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
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
                <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="price">Price</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
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
                <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="categoryId">Service Type</label>
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
                <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="locationId">Location</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
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
                <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="providerId">Provider</label>
                    <div className="flex items-center border-b-2 border-gray-300 py-2 focus-within:border-blue-500">
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
                <div className="flex flex-col">
                    <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="image">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="appearance-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Create Listing
                </button>
            </form>
            {showSuccessModal && <SuccessModal serviceName={serviceName} onClose={() => setShowSuccessModal(false)} />}
        </div>
    );
};

const SuccessModal = ({ serviceName, onClose }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();

        navigate('/services');
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
