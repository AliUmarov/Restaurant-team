import React from "react";
import cl from "../About/aboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={cl.aboutUs}>
      <div className={cl.cardInfo__aboutUs}>
        <div className={cl.imageDiv__aboutUs}>
          <img
            src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=''
            className={cl.image__aboutUs}
          />
        </div>
        <div className={cl.info__aboutUs}>
          <div className={cl.h2__aboutUs}>
            <h2>ЗА ГАСТРОНОМИЧЕСКИЙ ВКУС ОТВЕЧАЕТ: БУРАК ОЗДЕМИР</h2>
          </div>
          <div className={cl.p__aboutUs}>
            <p>
              Известный шеф-повар. Специализируется на современной русской,
              кавказской и азиатской кухнях. В послужном списке Бурака Оздемира
              работа в лучших гастрономических ресторанах: от самого высокого
              ресторана Европы Sixty до небольшого ресторанчика Saimaa Life
              Gastrocafe в Финляндии. Сегодня Бурак является бренд-шефом одного
              из ключевых ресторанов Эмина Агаларова – Halal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
