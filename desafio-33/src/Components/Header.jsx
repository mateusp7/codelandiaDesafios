import React from "react";
import styles from "../styles/Header.module.scss";
import Logo1 from "../assets/logo1.png";
import Instagram from '../assets/InstagramLogo.svg'
import Facebook from '../assets/FacebookLogo.svg'
import Linkedin from "../assets/LinkedinLogo.svg";
const Header = () => {
  return (
    <header className={`${styles.headerBackground}`}>
      <div className={`max-content ${styles.containerHeader}`}>
        <img
          src={Logo1}
          alt="Logo 1"
          style={{ width: "260x", height: "60px" }}
        />
        <ul className={styles.nav}>
          <li>
            <a href="#Início">Início</a>
          </li>
          <li>
            <a href="#Cursos">Cursos</a>
          </li>
          <li>
            <a href="#Vagas">Vagas</a>
          </li>
          <li>
            <a href="#Notícias">Notícias</a>
          </li>
          <li>
            <a href="#Contato">Contato</a>
          </li>
        </ul>
        <div className={styles.navRedes}>
          <div>
            <img src={Instagram} alt="Instagram Logo" />
          </div>
          <div>
            <img src={Facebook} alt="Facebook Logo" />
          </div>
          <div>
            <img src={Linkedin} alt="Linkedin Logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
