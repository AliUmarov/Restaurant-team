import "./App.css";
import ContactsPage from "./components/Pages/ContactsPage";
import NewsPages from "./components/Pages/NewsPages";
import { Route, Routes } from "react-router";
import HomePage from "./components/Pages/HomePage";
import React from "react";
import AboutUsPages from "./components/Pages/AboutUsPages";
import MenuPage from "./components/Pages/MenuPage";
import Modals from "./components/Modals";
import Cart from './components/Cart';
import MyBookingsPage from './components/Pages/MyBookingsPage';

function App() {
  return (
    <div className="App">
      <Cart />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutUsPages />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/news" element={<NewsPages />} />
        <Route path="/modals" element={<Modals />} />
        <Route path="/mybookings" element={<MyBookingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
