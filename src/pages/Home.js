import React from "react";
import Nav from "../components/Nav";
import Herobanner from "../components/Herobanner";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Herobanner />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
