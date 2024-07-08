import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Registration.jsx";
import Profile from "./components/Profile/Profile.jsx";
import BookingList from "./components/Bookings/BookingList.jsx";
import ServiceList from "./components/Services/ServiceList.jsx";
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/services" element={<ServiceList />} />
    <Route path="/bookings" element={<BookingList />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
