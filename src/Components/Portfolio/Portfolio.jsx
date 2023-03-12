import React from "react";
import About from "../about/About";


import Header from "../header/Header";
import bg from "./bg.jpg";

import style from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={style.Portfolio}>
      <img className={style.bg} src={bg} alt="" />
      <div className={style.wrap}>
        <Header/>
        <About/>
      </div>
    </div>
  );
};

export default Portfolio;
