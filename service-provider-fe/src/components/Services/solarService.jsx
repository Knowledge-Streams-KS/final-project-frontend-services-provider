import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSolarServices } from '../../redux/slices/solarServiceSlice.js';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import solarServiceImage from '../../assets/solar_service.png';

const SolarService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { services, loading, error } = useSelector((state) => state.solarServices);

    useEffect(() => {
        dispatch(fetchSolarServices());
    }, [dispatch]);

    const handleBookNowClick = (serviceId) => {
        navigate(`/book-service/${serviceId}`);
    };

    return (
        <div className="container mx-auto mt-8 px-4">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Solar Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-slate-800 transition-shadow duration-300">
                        <div className="flex items-center p-6">
                            <img src={solarServiceImage} alt={service.serviceName} className="h-32 w-32 rounded-xl mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{service.serviceName}</h3>
                                <p className="text-gray-700">{service.description}</p>
                                <p className="text-gray-600 font-bold">${service.price}</p>
                                <div className="flex items-center mt-2">
                                    <Button
                                        size="small"
                                        color="primary"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={() => handleBookNowClick(service.id)}
                                    >
                                        Book Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default SolarService;
