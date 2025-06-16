import React from "react";
import Navbar from "./components/Navbar";
import TopContactBar from "./components/TopContactBar";
import Centers from "./components/Centers";
import ModernWorkspaces from "./components/ModernWorkspaces";
import Amenities from "./components/Amenities";
import Footer from "./components/Footer";

import FounderSection from "./components/FounderSection";
import Heroslider from "./components/HeroSlider.JSX";

const App = () => {
  return (
    <div>
      <TopContactBar />
      <Navbar />
      <Heroslider />
      <Centers />
      <ModernWorkspaces />
      <Amenities />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default App;
