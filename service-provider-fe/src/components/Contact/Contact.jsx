import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                <p className="text-xl mb-8">We would love to hear from you!</p>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <input type="text" className="w-full p-2 border rounded" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <input type="email" className="w-full p-2 border rounded" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <textarea className="w-full p-2 border rounded" placeholder="Message" rows="4"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
