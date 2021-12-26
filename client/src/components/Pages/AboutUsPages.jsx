import React from "react";
import AboutUs from "../About/AboutUs";
import Header from "../Header";
import cl from "../Header/header.module.css";
import Footer from "../Footer";

const AboutUsPages = () => {
  return (
    <div className={cl.PageImage}>
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPages;
