import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-12 bg-gradient-to-r bg-gray-400 mx-12 rounded-2xl my-6">
            <div className="container mx-auto text-center px-4 md:px-12 lg:px-24">
                <h2 className="text-4xl font-extrabold mb-6">About Us</h2>
                <p className="text-xl mb-8">We are dedicated to providing the best services to our customers. Our mission is to make your life easier by bringing trusted service providers to your doorstep. Your satisfaction is our priority.</p>

                <div className="bg-gray-300 text-gray-900 p-8 rounded-lg shadow-lg">
                    <h3 className="text-3xl font-bold mb-4">Service Providers Are Now at Your Doorstep</h3>
                    <p className="text-lg mb-6">
                        Finding the right service provider just got easier! With our platform, you can connect with qualified professionals for all your needs, right from the comfort of your home. Whether you need a plumber, carpenter, electrician, or any other service, we have you covered.
                    </p>

                    <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
                    <ul className="text-left mb-6">
                        <li className="text-lg mb-2"><strong>Verified Professionals:</strong> All service providers are thoroughly vetted to ensure you get the best service.</li>
                        <li className="text-lg mb-2"><strong>Wide Range of Services:</strong> Choose from a variety of services to find exactly what you need.</li>
                        <li className="text-lg mb-2"><strong>Convenient Booking:</strong> Book services at your convenience with our easy-to-use platform.</li>
                        <li className="text-lg mb-2"><strong>Transparent Pricing:</strong> No hidden fees. Know the cost upfront before you book.</li>
                    </ul>

                    <h4 className="text-2xl font-bold mb-4">How It Works</h4>
                    <ul className="text-left mb-6">
                        <li className="text-lg mb-2"><strong>Browse Services:</strong> Explore a wide range of services available in your area.</li>
                        <li className="text-lg mb-2"><strong>Select a Provider:</strong> Choose from a list of verified professionals.</li>
                        <li className="text-lg mb-2"><strong>Book a Service:</strong> Schedule a service at a time that suits you.</li>
                        <li className="text-lg mb-2"><strong>Enjoy Quality Service:</strong> Sit back and relax while the professionals handle the rest.</li>
                    </ul>

                    <h4 className="text-2xl font-bold mb-4">Get Started Today</h4>
                    <p className="text-lg mb-6">
                        Sign up now and experience the convenience of having service providers just a click away. Whether it's a small repair or a major project, we are here to help.
                    </p>

                    <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
                    <p className="text-lg">
                        For any questions or assistance, feel free to reach out to our support team. We are here to help you every step of the way.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
