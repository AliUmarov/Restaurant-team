import React from "react";
import cl from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className={cl.main}>
      <p className={cl.h1}>Контакты ресторана Halal</p>
      <div className={cl.block1}>
        <div className={cl.podblock1}>
          <h4>Адрес</h4>
          <p>г.Грозный</p>
          <p>ул.Трошева, 7</p>
        </div>
        <div className={cl.podblock1}>
          <h4>График работы</h4>
          <p>ПН-ПТ - 10:00-22:00</p>
          <p>СБ-ВС - 10:00-00:00</p>
        </div>
      </div>
      <div className={cl.block2}>
        <div className={cl.podblock2}>
          <h4>Телефон</h4>
          <p>8 (800) 555 55 35</p>
        </div>
        <div className={cl.podblock2}>
          <h4>E-mail</h4>
          <p>halal@halrest.ru</p>
        </div>
      </div>
      <div className={cl.messenger}>
        <a
          href="http://instagram.com/eltmirov.95"
          target="_blank"
          className={cl.message}
        >
          Написать нам
        </a>
      </div>
      <div>
        <h2 className={cl.h2}>Схема проезда в ресторан Halal</h2>
      </div>
      <div className={cl.map}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b83821cb29fa1b3a660943cb31426603c6e393cfc8602a6bfcdec2c238e1e29&amp;source=constructor"
          width="1000"
          height="400"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
