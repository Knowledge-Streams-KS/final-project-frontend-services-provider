// src/components/HomeService.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeServices } from '../../redux/slices/homeServiceSlice.js';
import { Link } from 'react-router-dom';

const HomeService = () => {
    const dispatch = useDispatch();
    const { services, loading, error } = useSelector((state) => state.homeService);

    useEffect(() => {
        dispatch(fetchHomeServices());
    }, [dispatch]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Home Services</h1>
            <Link to="/create-service/home?redirectTo=/services/home">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 shadow-md px-4 py-2 rounded">
                    Create Home Service
                </button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => {
                    console.log('Rendering service:', service);
                    return (
                        <div key={service.id} className="bg-white rounded-lg shadow-md p-4">
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                            <p className="text-gray-700">{service.description}</p>
                            <p className="text-green-500 font-bold">${service.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeService;
