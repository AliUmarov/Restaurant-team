import React from "react";
import Header from "../Header";
import Menu from "../Menu/Menu";
import cl from "../Header/header.module.css";
import Footer from "../Footer";

const MenuPage = () => {
  return (
    <div className={cl.PageImage}>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default MenuPage;
