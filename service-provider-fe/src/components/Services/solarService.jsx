// src/components/SolarService.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSolarServices } from '../../redux/slices/solarServiceSlice.js';

const SolarService = () => {
    const dispatch = useDispatch();
    const { services, status, error } = useSelector((state) => state.solarService);

    useEffect(() => {
        dispatch(fetchSolarServices());
    }, [dispatch]);

    return (
        <div>
            <h1>Solar Services</h1>
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

export default SolarService;
