import React from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-gray-100">
                <div className="container mx-auto flex justify-between items-center py-4 px-4">
                    <img src={logo} alt="Company Logo" className="h-8" />
                    <nav className="flex space-x-4">
                        <a href="/" className="text-gray-700">Home</a>
                        <a href="/about" className="text-gray-700">About</a>
                        <a href="/services" className="text-gray-700">Services</a>
                        <a href="/testimonials" className="text-gray-700">Testimonials</a>
                        <a href="/contact" className="text-gray-700">Contact</a>
                        <a href="/login" className="text-gray-700">Login</a>
                        <a href="/register" className="text-gray-700">Register</a>
                    </nav>
                </div>
            </header>

            {/* Main Section */}
            <main className="flex-grow bg-gray-50">
                <section className="text-center py-12">
                    <h1 className="text-4xl font-bold mb-4">On Time, Done Right.</h1>
                    <p className="text-xl mb-6">Connecting customers and technicians for quick, safe, and affordable bookings.</p>
                    <div className="container mx-auto">
                        <select className="block mx-auto mb-6 px-4 py-2 border rounded">
                            <option>Lahore</option>
                            <option>Karachi</option>
                            <option>Islamabad</option>
                        </select>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-white rounded shadow">
                                <img src="home_services.png" alt="Home Services" className="mx-auto mb-4" />
                                <h3 className="font-bold">Home Services</h3>
                            </div>
                            <div className="p-4 bg-white rounded shadow">
                                <img src="cleaning_services.png" alt="Cleaning Services" className="mx-auto mb-4" />
                                <h3 className="font-bold">Cleaning Services</h3>
                            </div>
                            <div className="p-4 bg-white rounded shadow">
                                <img src="personal_care.png" alt="Personal Care" className="mx-auto mb-4" />
                                <h3 className="font-bold">Personal Care</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Mr. Mahir is Now Mahir Company!</h2>
                        <p className="text-xl mb-6">Previously known as Mr. Mahir, Mahir Company is your go-to and on-demand expert for all your Home & Personal Care needs...</p>
                        <a href="/about" className="text-blue-600 hover:underline">Read more</a>
                    </div>
                </section>

                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Book a Mahir</h2>
                        <p className="text-xl mb-6">100,000+ Active Users</p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://appstore.com" className="bg-black text-white px-4 py-2 rounded">Available on the App Store</a>
                            <a href="https://playstore.com" className="bg-black text-white px-4 py-2 rounded">Get it on Google Play</a>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-4">Our Affiliations</h2>
                        <div className="flex justify-center space-x-4">
                            <img src="affiliation1.png" alt="Affiliation 1" className="h-12" />
                            <img src="affiliation2.png" alt="Affiliation 2" className="h-12" />
                            <img src="affiliation3.png" alt="Affiliation 3" className="h-12" />
                            <img src="affiliation4.png" alt="Affiliation 4" className="h-12" />
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        <div className="mb-4 md:mb-0">
                            <h6 className="text-xl">Service Provider</h6>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-400">Terms of Service</a>
                            <a href="#" className="hover:text-gray-400">Facebook</a>
                            <a href="#" className="hover:text-gray-400">Twitter</a>
                            <a href="#" className="hover:text-gray-400">Instagram</a>
                        </div>
                    </div>
                    <p className="text-gray-400">© 2024 Service Provider. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Hero;
