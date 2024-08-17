import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUS from "../pages/ContactUs";
import FitnessPartner from "../pages/FitnessPartner";
import CorporatePartner from "../pages/CorporatePartner";
import NavBar from "../components/Navbar";
import Footer from "../layout/Footer";
import AboutUs from "../pages/AboutUs";
import Terms from "../pages/Terms";
import Faqs from "../pages/FAQS";
import Refund from "../pages/Refund";
import Privacy from "../pages/Privacy";
import Login from "../pages/Login";

const Routers = () => {
  return (
    <>
      <div>

        <Router>
          <NavBar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/fitnesspartner" element={<FitnessPartner />} />
            <Route exact path="/corporatepartner" element={<CorporatePartner />} />
            <Route exact path="/contactus" element={<ContactUS />} />

          </Routes>
          <Footer />

        </Router>
      </div>
    </>
  );
};


export default Routers;
