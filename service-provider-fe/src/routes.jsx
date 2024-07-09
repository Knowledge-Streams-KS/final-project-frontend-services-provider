import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Registration.jsx";
import Profile from "./components/Profile/Profile.jsx";
import BookingList from "./components/Bookings/BookingList.jsx";
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import HomeService from './components/Services/homeService.jsx';
import CleaningService from './components/Services/cleaningServices.jsx';
import PersonalService from './components/Services/personalService.jsx';
import SolarService from './components/Services/solarService.jsx';
import HomeInspection from './components/Services/homeInspection.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/services/home/:id" element={<HomeService />} />
    <Route path="/services/cleaning/:id" element={<CleaningService />} />
    <Route path="/services/personal/:id" element={<PersonalService />} />
    <Route path="/services/solar/:id" element={<SolarService />} />
    <Route path="/services/inspection/:id" element={<HomeInspection />} />
    <Route path="/bookings" element={<BookingList />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
