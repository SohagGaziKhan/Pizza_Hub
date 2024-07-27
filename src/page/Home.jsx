import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import AppStore from "../components/AppStore";
import Map from "../components/Map";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";

const Home = () => {
  return (
    <div className="bg-white duration-200 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Banner />
      <Testimonials />
      <AppStore />
      <Map />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Home;
