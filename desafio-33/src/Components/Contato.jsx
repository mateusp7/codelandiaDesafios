import React from "react";
import styles from "../styles/Contato.module.scss";

const Contato = () => {
  return (
    <div className={styles.containerGeral}>
      <div className={styles.leftContainer}>
        <h1>ESTÁGIOS E EMPREGOS</h1>
      </div>
      <div className={styles.rightContainer}>
        <ul className={styles.listVagas}>
          <li>
            <h1>Lorem ipsum dolor sit amet</h1>
            <span>Publicado em 00/00/2000</span>
            <a href="">Mais mais sobre a vaga</a>
          </li>
          <li>
            <h1>Lorem ipsum dolor sit amet</h1>
            <span>Publicado em 00/00/2000</span>
            <a href="">Mais mais sobre a vaga</a>
          </li>
          <li>
            <h1>Lorem ipsum dolor sit amet</h1>
            <span>Publicado em 00/00/2000</span>
            <a href="">Mais mais sobre a vaga</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
