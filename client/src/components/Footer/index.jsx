import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div class="bg-dark text-white px-3 py-3 ">
      <div class="py-3">
        <h6
          className={`display-5 fw-bold text-white bg-transparent ${styles.footerText}`}
        >
          Нет любви более искренней, чем любовь к еде!{" "}
        </h6>
        <div class="col-lg-6 mx-auto ">
          <p class="fs-5 mt-5 mb-4 text-center">
            © 1987 - 2021. Halal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
