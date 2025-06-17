import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopContactBar from "./components/TopContactBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Aboutus from "./Pages/Aboutus";
import LocationsPage from "./Pages/LocationsPage";
import Workspaces from "./Pages/workspaceInfo";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";

const App = () => {
  return (
    <Router>
      <TopContactBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
