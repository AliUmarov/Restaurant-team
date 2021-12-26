import React from "react";
import Header from "../Header";
import cl from "../Header/header.module.css";
import News from "../News/News";

const NewsPages = () => {
  return (
    <div className={cl.PageImage}>
      <Header />
      <News />
    </div>
  );
};

export default NewsPages;
