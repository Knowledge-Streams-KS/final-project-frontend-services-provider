// src/components/Services/PersonalService.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPersonalServices } from '../../redux/slices/personalServiceSlice';

const PersonalService = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { services, status, error } = useSelector((state) => state.personalService);

    useEffect(() => {
        dispatch(fetchPersonalServices());
    }, [dispatch]);

    const service = services.find((service) => service.id === id);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>{error}</p>;

    return (
        <div>
            <h1>Personal Service</h1>
            {service ? (
                <div>
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                    <p>{service.price}</p>
                </div>
            ) : (
                <p>Service not found</p>
            )}
        </div>
    );
};

export default PersonalService;
