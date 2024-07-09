// src/components/CleaningService.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCleaningServices } from '../../redux/slices/cleaningServicesSlice.js';

const CleaningService = () => {
    const dispatch = useDispatch();
    const { services, status, error } = useSelector((state) => state.cleaningService);

    useEffect(() => {
        dispatch(fetchCleaningServices());
    }, [dispatch]);

    return (
        <div>
            <h1>Cleaning Services</h1>
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

export default CleaningService;
