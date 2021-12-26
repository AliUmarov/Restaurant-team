import React from "react";
import Tables from "../Tables";
import Header from "../Header";
import Footer from "../Footer";
import Products from "../Products";
import welcome from "../../images/welcome.png";
import cl from "../Header/header.module.css";

const HomePage = () => {
  return (
    <div className="bg-dark ">
      <div className={cl.PageImage}>
        <Header />

        <div className={cl.offer}>
          <div>
            <img src={welcome} alt="" className={cl.welcome} />
          </div>
          <p>Halal - ощущения, за которыми стоит охотиться!</p>
          <li>
            <a href="#reserved" className={cl.btn}>
              Забронировать
            </a>
            <div className={cl.arrow}></div>
          </li>
        </div>
      </div>
      <Tables />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
