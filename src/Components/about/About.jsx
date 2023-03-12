import React from "react";
import style from "./About.module.css";
import html5 from "./html5.png";
import css from "./css.png";
import js from "./js.png";
import nodejs from "./nodejs.png";
import physics from "./physics.png";
import bootstrap from "./bootstrap.png";
import Contact from "../contact/Contact";

const About = () => {
  return (
    <div className={style.About}>
      <h2 className={style.heading}>ABOUT ME</h2>
      <div className={style.line}></div>
      <p className={style.Para}>
        Hi, I'm Sukhjinder Arora, a Full Stack Web Developer specializing in
        JavaScript stack, currently living in Delhi (NCR), India.
      </p>
      <p className={style.Para}>
        I love developing websites and applications which are cross browser
        compatible, fully responsive, scalable and optimized for performance.
        When I am not working you can find me at my blog, where I write about
        web development.
      </p>
      <p className={style.Para}>
        I have also earned a degree in Bachelor of Engineering in Computer
        Science from the Kurukshetra University.
      </p>
      <p className={style.Para}>
        If you would like to connect with me, then be sure to find me on
        Twitter, Linkedin and also on Medium.
      </p>
      <p className={style.Para}>
        <b>
          I am available for full time, contract and freelance work. If you want
          to hire me, have some chat, feel free to contact me.
        </b>
      </p>
      <div className={style.Skills}>
        <div className={style.iconHeader}>

        <h2 className={style.heading}> MY SKILLS</h2>
        <div className={style.line}></div>
        <p >The skills i have gained so far are listed below:</p>
        </div>
        <div className={style.skillsIcons}>
          <span className={style.Icons}>
            <img src={html5} style={{ width: 100 }} alt="" />
            <p>HTML5</p>
          </span>
          <span className={style.Icons}>
            <img src={css} style={{ width: 100 }} alt="" />
            <p>css</p>
          </span>

          <span className={style.Icons}>
            <img src={js} style={{ width: 100 }} alt="" />
            <p>js</p>
          </span>
          <span className={style.Icons}>
            <img src={nodejs} style={{ width: 100 }} alt="" />
            <p>nodejs</p>
          </span>
          <span className={style.Icons}>
            <img src={physics} style={{ width: 100 }} alt="" />
            <p>react</p>
          </span>
          <span className={style.Icons}>
            <img src={bootstrap} style={{ width: 100 }} alt="" />
            <p>bootstrap</p>
          </span>
        </div>
        <Contact/>
      </div>
    </div>
  );
};

export default About;
