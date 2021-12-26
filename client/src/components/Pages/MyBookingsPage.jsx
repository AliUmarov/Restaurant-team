import React from 'react';
import cl from '../Header/header.module.css';
import Header from '../Header';
import Contacts from '../Contacts/Contacts';
import MyBookings from '../MyBookings';
import Footer from '../Footer';

function MyBookingsPage(props) {
  return (
  <div className={cl.PageImage}>
    <Header />
    <MyBookings />
    <Footer />
  </div>
  );
}

export default MyBookingsPage;
