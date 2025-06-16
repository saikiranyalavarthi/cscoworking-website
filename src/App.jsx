import React from "react";
import Navbar from "./components/Navbar";
import TopContactBar from "./components/TopContactBar";
import Centers from "./components/Centers";
import ModernWorkspaces from "./components/ModernWorkspaces";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";

import FounderSection from "./components/FounderSection";

import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <div>
      <TopContactBar />
      <Navbar />
      <Hero />
      <Centers />
      <ModernWorkspaces />
      <Amenities />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default App;
