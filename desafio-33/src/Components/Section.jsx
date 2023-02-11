import React from 'react'
import styles from "../styles/Section.module.scss";

const Section = () => {
  return (
    <>
      <div className={styles.sectionBackground}>
        <div className={styles.sectionContent}>
          <h1>Helcy Moreira Martins Aguiar</h1>
          <p>
            Com mais de 20 anos de atuação, a unidade da Etec Professora Helcy
            Moreira Martins Aguiar se destaca no ensino médio e técnico,
            recebendo constantemente menções e congratulações em todo o estado
            de São Paulo.
          </p>
        </div>
      </div>
      <div>
        <ul className={styles.subSection}>
          <li>
            <p>
              Mantida pelo governo do Estado de São Paulo, os cursos oferecidos
              – além de qualidade ímpar – são totalmente gratuitos, levando para
              toda a população um ensino de qualidade e a oportunidade de
              aprender uma profissão.
            </p>
          </li>
          <li>
            <p>
              Contando com um corpo docente extremamente qualificado e estrutura
              física moderna, os cursos oferecidos nesta unidade se destacam
              pela qualidade de ensino, onde o aluno realmente aprende conteúdos
              relevantes, de maneira fácil e didática.
            </p>
          </li>
          <li>
            <p>
              Baseado em uma didática prática, os alunos são envolvidos em
              conteúdos que abordam as diversas realidades do mercado, formando
              assim mão de obra qualificada e proporcionando uma experiência
              diferenciada para o aluno.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Section