import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-gray-900 py-4 mt-auto shadow-top">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div className="mb-4 md:mb-0">
                        <h6 className="text-center text-xl">Service Provider</h6>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gray-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            Instagram
                        </a>
                    </div>
                </div>
                <p className="text-center text-gray-900">
                    © 2024 Service Provider. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
