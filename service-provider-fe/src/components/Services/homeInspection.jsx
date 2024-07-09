// src/components/HomeInspection.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeInspections } from '../../redux/slices/homeInspectionSlice.js';

const HomeInspection = () => {
    const dispatch = useDispatch();
    const { services, status, error } = useSelector((state) => state.homeInspection);

    useEffect(() => {
        dispatch(fetchHomeInspections());
    }, [dispatch]);

    return (
        <div>
            <h1>Home Inspections</h1>
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

export default HomeInspection;
