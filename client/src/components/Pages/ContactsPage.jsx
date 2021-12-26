import React from "react";
import Header from "../Header";
import Contacts from "../Contacts/Contacts";
import cl from "../Header/header.module.css";
import Footer from "../Footer";

const ContactsPage = () => {
  return (
    <div className={cl.PageImage}>
      <Header />
      <Contacts />
      <Footer />
    </div>
  );
};

export default ContactsPage;
