import React from "react";
import styles from "../styles/Footer.module.scss";
import Logo2 from "../assets/logo2.png";
import Globe from "../assets/GlobeHemisphereWest.svg";
import Phone from "../assets/Phone.svg";
import Email from "../assets/EnvelopeSimple.svg";
import Instagram from "../assets/InstagramLogo.svg";
import Facebook from "../assets/FacebookLogo.svg";
import Linkedin from "../assets/LinkedinLogo.svg";

const Footer = () => {
  return (
    <div className={styles.footerBackground}>
      <div className={`${styles.footerContent} max-content`}>
        <img
          src={Logo2}
          alt="Logo 1"
          style={{ width: "260x", height: "60px" }}
        />
        <ul className={styles.contatoList}>
          <li>
            <img src={Globe} alt="Globo" />
            <div>
              <span>Rua Codelândia, 1367</span>
              <h3>Cafelândia, SP</h3>
            </div>
          </li>
          <li>
            <img src={Phone} alt="Phone" />
            <h3>+55 14 99999-9999</h3>
          </li>
          <li>
            <img src={Email} alt="Phone" />
            <h3>centropaulasouza@etec.sp.gov.br</h3>
          </li>
        </ul>
        <div className={styles.about}>
          <h3>Sobre a Etec Cafelândia</h3>
          <p>
            Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
            Moreira Martins Aguiar se destaca no ensino médio e técnico,
            recebendo constantemente menções e congratulações em todo o estado
            de São Paulo.{" "}
          </p>
          <div className={styles.aboutContentImages}>
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
      <div className={styles.subFooter}>
        Etec Professora Helcy Moreira Martins Aguiar - 2022 © Todos os direitos
        reservados.
      </div>
      </div>
    </div>
  );
};

export default Footer;
