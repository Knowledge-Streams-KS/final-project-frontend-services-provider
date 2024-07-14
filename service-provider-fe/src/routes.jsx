import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Registration.jsx";
import Profile from "./components/Profile/Profile.jsx";
import BookingList from './components/Bookings/BookingList';
import BookingDetail from './components/Bookings/BookingDetail';
import ServiceList from "./components/Services/ServiceList.jsx";
import HomeService from "./components/Services/homeService.jsx";
import CleaningService from "./components/Services/cleaningServices.jsx";
import PersonalService from "./components/Services/personalService.jsx";
import SolarService from "./components/Services/solarService.jsx";
import HomeInspection from "./components/Services/homeInspection.jsx";
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import CreateListing from './components/Services/createListing.jsx';
import BookService from "./components/Bookings/BookService.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/services" element={<ServiceList />} />
    <Route path="/services/home" element={<HomeService />} />
    <Route path="/services/cleaning" element={<CleaningService />} />
    <Route path="/services/personal" element={<PersonalService />} />
    <Route path="/services/solar" element={<SolarService />} />
    <Route path="/services/inspection" element={<HomeInspection />} />
    <Route path="/bookings" element={<BookingList />} />
    <Route path="/booking/:id" element={<BookingDetail />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/create-service" element={<CreateListing />} />
    <Route path="/services/category/:category" element={<ServiceList />} />
    <Route path="book-service/:serviceId" element={<BookService />} />
  </Routes>
);

export default AppRoutes;
