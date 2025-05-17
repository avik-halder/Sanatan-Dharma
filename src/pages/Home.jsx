import React from "react";
import Hero from "../components/home/Hero";
import Deities from "../components/home/Deities";
import Practices from "../components/home/Practices";
import Festivals from "../components/home/Festivals";
import Temples from "../components/home/Temples";
import Resources from "../components/home/Resources";

const Home = () => {
  return (
    <div>
      <Hero />
      <Deities />
      <Practices />
      <Festivals />
      <Temples />
      <Resources />
    </div>
  );
};

export default Home;
