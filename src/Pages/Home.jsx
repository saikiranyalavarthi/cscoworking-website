import React from "react";

import Centers from "../components/Centers";
import ModernWorkspaces from "../components/ModernWorkspaces";

import Hero from "../components/Hero";
import Amenities from "../components/Amenities";
import FounderSection from "../components/FounderSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Centers />
      <ModernWorkspaces />
      <Amenities />
      <FounderSection />
    </div>
  );
};

export default Home;
