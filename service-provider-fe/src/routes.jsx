// src/routes/index.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/components/About";
import Login from "../src/components/Auth/Login";
import Register from "../src/components/Auth/Registration";
import Profile from "../src/components/Profile/Profile";
import BookingList from '../src/components/Bookings/BookingList';
import BookingDetail from '../src/components/Bookings/BookingDetail';
import ServiceList from "../src/components/Services/ServiceList";
import HomeService from "../src/components/Services/homeService";
import CleaningService from "../src/components/Services/cleaningServices";
import PersonalService from "../src/components/Services/personalService";
import SolarService from "../src/components/Services/solarService";
import HomeInspection from "../src/components/Services/homeInspection";
import Testimonials from '../src/components/Testimonials/Testimonials';
import Contact from '../src/components/Contact/Contact';
import CreateListing from '../src/components/Services/createListing';
import BookService from "../src/components/Bookings/BookService";
import ForgotPassword from '../src/components/Auth/ForgetPassword';
import ResetPassword from '../src/components/Auth/ResetPassword';

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
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/reset-password/:token" element={<ResetPassword />} />
  </Routes>
);

export default AppRoutes;
