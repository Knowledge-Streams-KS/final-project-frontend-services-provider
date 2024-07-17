import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchServiceById } from '../../redux/slices/serviceSlice';
import { Button } from '@mui/material';

const ServiceDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { service, loading, error } = useSelector((state) => state.services);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        dispatch(fetchServiceById(id));
    }, [dispatch, id]);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    const handleBookNowClick = () => {
        navigate(`/book-service/${service.id}`);
    };

    return (
        <div className='container mx-auto mt-12 px-8 mb-4 max-w-3xl'>
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error.message}</p>}
            {service && (
                <div className='bg-gray-100 shadow-lg rounded-lg overflow-hidden p-6'>
                    <div className='flex flex-col lg:flex-row justify-between items-start mb-4'>
                        <div className='flex-1'>
                            <h3 className='text-3xl font-semibold text-gray-900'>{service.serviceName}</h3>
                            <p className='text-gray-700 mt-2'>
                                {showFullDescription ? service.description : truncateText(service.description, 100)}
                                <Button
                                    size="small"
                                    variant="text"
                                    color="primary"
                                    onClick={toggleDescription}
                                    className="ml-2"
                                >
                                    {showFullDescription ? 'View Less' : 'View More'}
                                </Button>
                            </p>
                            <p className='text-gray-700 mt-2'><span className='font-bold'>Category:</span> {service.Category?.categoryName}</p>
                            <p className='text-gray-700 mt-2'><span className='font-bold'>Location:</span> {service.Location?.name}</p>
                            <p className='text-gray-700 mt-2'><span className='font-bold'>Provider:</span> {service.Provider?.name}</p>
                            <p className='text-gray-600 font-bold mt-2'>Rs: {service.price}/-</p>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full mt-4"
                                onClick={handleBookNowClick}
                                style={{ marginTop: '20px' }} // Add margin to the button
                            >
                                Book Now
                            </Button>
                        </div>
                        <img
                            src={service.imageUrl ? `http://localhost:3004${service.imageUrl}` : 'default_image_path'}
                            alt={service.serviceName}
                            className="h-32 w-32 lg:h-48 lg:w-48 rounded-xl mt-4 lg:mt-0"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceDetail;
