// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import { Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importing images
import image1 from '../../assets/testomonial/John.png';
import image2 from '../../assets/testomonial/Jane.png';
import image3 from '../../assets/testomonial/Robert.png';
import image4 from '../../assets/testomonial/Emily.png';
import image5 from '../../assets/testomonial/Michael.png';
import image6 from '../../assets/testomonial/Jessica.png';
import image7 from '../../assets/testomonial/David.png';
import image8 from '../../assets/testomonial/Sarah.png';
import image9 from '../../assets/testomonial/Daniel.png';
import image10 from '../../assets/testomonial/Laura.png';
import image11 from '../../assets/testomonial/Chris.png';
import image12 from '../../assets/testomonial/Kimberly.png';
import image13 from '../../assets/testomonial/Sophia.png';
import image14 from '../../assets/testomonial/Brian.png';
import image15 from '../../assets/testomonial/James.png';

const testimonialsData = [
    { id: 1, name: 'John Doe', testimonial: 'Excellent service! Highly recommend.', rating: 5, image: image1 },
    { id: 2, name: 'Jane Smith', testimonial: 'Very reliable and professional.', rating: 5, image: image2 },
    { id: 3, name: 'Robert Brown', testimonial: 'Outstanding experience!', rating: 5, image: image3 },
    { id: 4, name: 'Emily Johnson', testimonial: 'Superb service and great support.', rating: 5, image: image4 },
    { id: 5, name: 'Michael Williams', testimonial: 'Top-notch service!', rating: 5, image: image5 },
    { id: 6, name: 'Jessica Davis', testimonial: 'Great service but a bit pricey.', rating: 4.5, image: image6 },
    { id: 7, name: 'David Wilson', testimonial: 'Very good service, will use again.', rating: 4.5, image: image7 },
    { id: 8, name: 'Sarah Miller', testimonial: 'Satisfied with the service provided.', rating: 4.5, image: image8 },
    { id: 9, name: 'Daniel Anderson', testimonial: 'Good quality service.', rating: 4.5, image: image9 },
    { id: 10, name: 'Laura Martinez', testimonial: 'Service was great but could improve in speed.', rating: 4.5, image: image10 },
    { id: 11, name: 'Chris Lee', testimonial: 'Decent service overall.', rating: 4.2, image: image11 },
    { id: 12, name: 'Kimberly Garcia', testimonial: 'Service met my expectations.', rating: 4.2, image: image12 },
    { id: 13, name: 'Brian Clark', testimonial: 'Good service but some issues.', rating: 4.2, image: image13 },
    { id: 14, name: 'Sophia Rodriguez', testimonial: 'Satisfied but room for improvement.', rating: 4.2, image: image14 },
    { id: 15, name: 'James Lewis', testimonial: 'Quality service but could be better.', rating: 4.2, image: image15 },
];

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center">
            {Array(fullStars).fill().map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
            ))}
            {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />}
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="py-12 bg-gray-200 mt-8">
            <div className="container mx-auto text-center">
                <Typography variant="h4" className="text-center mt-8 mb-4">Testimonials</Typography>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonialsData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="shadow-lg rounded-lg bg-white p-4">
                                <div className="flex flex-col items-center mb-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 object-cover rounded-full mb-2" />
                                    <div className="text-center">
                                        <Typography variant="h6" className="font-semibold">{testimonial.name}</Typography>
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                                <Typography variant="body1" className="text-center">{testimonial.testimonial}</Typography>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
