import React from 'react';
import homeServices from '../assets/home_services.png'; // Ensure correct paths for images
import cleaningServices from '../assets/cleaning_services.png';
import personalCare from '../assets/personal_care.png';
import solarService from '../assets/solar_service.png';
import homeInspection from '../assets/home_inspection.png';
import illustration from '../assets/illustration.png'; // Ensure correct path for the illustration

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow ">
        <section className="text-center py-12 ">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-44">
            <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl font-bold mb-4">On Time, Done Right.</h1>
              <p className="text-xl mb-6">Connecting customers and technicians for quick, safe, and affordable bookings.</p>
              <label className="block mx-auto mb-4 text-3xl font-semibold text-left">Select City</label>
              <select className="block mx-auto mb-6 px-4 py-3 border rounded w-auto md:w-full">
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Islamabad</option>
              </select>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-2xl ">
                <div className="p-4 bg-white rounded shadow flex items-center">
                  <img src={homeServices} alt="Home Services" className="h-16 w-16 rounded-xl mr-4" />
                  <h3 className="font-bold">Home Services</h3>
                </div>
                <div className="p-4 bg-white rounded shadow flex items-center">
                  <img src={cleaningServices} alt="Cleaning Services" className="h-16 w-16 rounded-xl mr-4" />
                  <h3 className="font-bold">Cleaning Services</h3>
                </div>
                <div className="p-4 bg-white rounded shadow flex items-center">
                  <img src={personalCare} alt="Personal Care" className="h-16 w-16 rounded-xl mr-4" />
                  <div>
                    <h3 className="font-bold">Personal Care</h3>
                    <p className="text-gray-600">Females Only</p>
                  </div>
                </div>
                <div className="p-4 bg-white rounded shadow flex items-center">
                  <img src={solarService} alt="Solar Services" className="h-16 w-16 rounded-xl mr-4" />
                  <h3 className="font-bold">Solar Services</h3>
                </div>
                <div className="p-4 bg-white rounded shadow flex items-center">
                  <img src={homeInspection} alt="Home Inspection" className="h-16 w-16 rounded-xl mr-4" />
                  <h3 className="font-bold">Home Inspection</h3>
                </div>
              </div>
            </div>
            <div className="w-1/2 hidden md:block">
              <img src={illustration} alt="Illustration" className="ml-auto h-96 w-96 object-cover rounded-3xl mt-52" />
            </div>
          </div>
        </section>
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Service Providers Are Now at Your Doorstep!</h2>
            <p className="text-xl mb-6 break-words">Finding the right service provider just got easier! With our platform, you can connect with qualified professionals for all your needs, right from the comfort of your home...</p>
            <a href="/about" className="text-blue-600 hover:underline">Read more {'>>>'}</a>
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
    </div>
  );
}

export default Home;
