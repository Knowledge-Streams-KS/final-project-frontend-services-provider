import React from 'react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-12 bg-gray-100 mt-16 mx-10 rounded-2xl shadow-2xl">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 border rounded-lg">
                        <p className="italic">"Great service!"</p>
                        <p className="font-bold mt-2">- Client 1</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <p className="italic">"Highly recommend!"</p>
                        <p className="font-bold mt-2">- Client 2</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <p className="italic">"Excellent support!"</p>
                        <p className="font-bold mt-2">- Client 3</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
