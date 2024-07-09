// src/components/HomeService.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeServices } from '../../redux/slices/homeServiceSlice.js';

const HomeService = () => {
    const dispatch = useDispatch();
    const { services, status, error } = useSelector((state) => state.homeService);

    useEffect(() => {
        dispatch(fetchHomeServices());
    }, [dispatch]);

    return (
        <div>
            <h1>Home Services</h1>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>{error}</p>}
            {status === 'succeeded' &&
                services.map((service) => (
                    <div key={service.id}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p>{service.price}</p>
                    </div>
                ))}
        </div>
    );
};

export default HomeService;
