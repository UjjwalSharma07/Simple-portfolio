import React, { useState } from "react";
import raman from "./raman.jpg";
import style from "./Header.module.css";
import github from './github.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import medium from './medium.png'
import twitter from './twitter.png'
import sidebar from './sidebar.png'
import close from './close.png'

const Header = () => {
    const [show,setShow] = useState(false);
    const handleClick=()=>{
        setShow(true);
    }
    const handleClose=()=>{
      setShow(false);
    }
    return (
    <div className={style.Header}>
      <div className={style.box}>
        <div className={style.menu}>
            <span className={style.menutag}>Menu</span>
            <img onClick={handleClick} src={sidebar} alt="" />
        </div>
        {show && <div className={style.sidebar}>
            <div className={style.content}>
                <span className={style.close}>
                <img style={{zIndex:1}} src={close} onClick={handleClose} alt="" />
                </span>
                <span>HOME</span>
                <span>ABOUT</span>
                <span>SKILLS</span>
                <span>PORTFOLIO</span>
                <span>BLOG</span>
                <span>CONTACT</span>
            </div>
        </div>}
        <img className={style.profile} src={raman} alt="" />
        <h1 style={{letterSpacing:1.5}}>RAMAN</h1>
        <div className={style.line}></div>
        <h2>WEB DEVLOPER | SOFTWARE ENGINEER</h2>
        <div className={style.icons}>
            <img src={medium} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={github} alt="" />
        </div>
        <button className={style.btn}>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Header;
