import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ServiceList from "./components/Service/ServiceList";
import Profile from "./components/Profile/Profile";
import BookingList from "./components/Bookings/BookingList";
const AppRoutes = () => {
  <Routes>
    <Routes path="/" element={<Home />} />;
    <Routes path="/login" element={<Login />} />;
    <Routes path="/register" element={<Register />} />;
    <Routes path="/service" element={<ServiceList />} />;
    <Routes path="/bookings" element={<BookingList />} />;
    <Routes path="/Profile" element={<Profile />} />;
  </Routes>;
};
export default AppRoutes;
