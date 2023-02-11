import React from 'react'
import styles from "../styles/Main.module.scss";
import Agricultura from "../assets/agricultura.png";
import CanaDeAcucar from "../assets/cana-de-acucar.png";
import Computador from "../assets/computador.png";
import Despesas from "../assets/despesas.png";
import Financeiro from '../assets/financeiro.png'
import Processo from "../assets/processo.png";
import Vaca from "../assets/vaca.png";
import Vacina from '../assets/vacina.png'

const Main = () => {
  return (
    <div className={`${styles.mainContent} max-content`}>
      <h1>Cursos Técnicos</h1>
      <ul className={styles.contentImages}>
        <li>
          <img src={Vacina} alt="Vacina" />
          <p>ENFERMAGEM</p>
        </li>
        <li>
          <img src={Computador} alt="Vacina" />
          <p>DESENVOLVIMENTO <br />DE SISTEMAS</p>
        </li>
        <li>
          <img src={Processo} alt="Vacina" />
          <p>RECURSOS HUMANOS</p>
        </li>
        <li>
          <img src={Despesas} alt="Vacina" />
          <p>ADMINISTRAÇÃO</p>
        </li>
        <li>
          <img src={CanaDeAcucar} alt="Vacina" />
          <p>AÇÚCAR E ÁLCOOL</p>
        </li>
        <li>
          <img src={Agricultura} alt="Vacina" />
          <p>AGROPECUÁRIA</p>
        </li>
        <li>
          <img src={Vaca} alt="Vacina" />
          <p>ZOOTECNIA</p>
        </li>
        <li>
          <img src={Financeiro} alt="Vacina" />
          <p>AGRONEGÓCIO</p>
        </li>
      </ul>
    </div>
  );
}

export default Main