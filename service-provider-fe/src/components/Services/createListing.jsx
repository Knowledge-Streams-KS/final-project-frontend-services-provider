import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { createServiceListing } from '../../redux/slices/serviceSlice.js';
import { fetchUserProfile } from "../../redux/slices/authSlice.js";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import API from '../../utils/apiConfig.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faFileAlt, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const CreateListing = () => {
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({
        serviceName: '',
        description: '',
        price: '',
        categoryId: ''
    });

    const location = useLocation();
    const redirectTo = new URLSearchParams(location.search).get('redirectTo');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await API.get('/categories');
            setCategories(response.data);
            setForm((prevForm) => ({
                ...prevForm,
                categoryId: response.data.length > 0 ? response.data[0].id : ''
            }));
        };
        fetchCategories();
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
        console.log('Submitting form with data:', form); // Log the form data
        if (form.serviceName && form.categoryId) {
            await dispatch(createServiceListing(form));
            navigate(redirectTo || `/services/category/${form.categoryId}`);
        } else {
            console.error('Service Name and Category ID are required');
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
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Create Listing
                </button>
            </form>
        </div>
    );
};

export default CreateListing;
