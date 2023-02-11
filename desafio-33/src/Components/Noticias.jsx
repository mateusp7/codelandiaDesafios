import React from 'react'
import styles from '../styles/Noticias.module.scss'
const Noticias = () => {
  return (
    <div className={`max-content ${styles.containerNoticias}`}>
      <h1>Notícias</h1>
      <ul className={styles.listNoticias}>
        <li>
          <div className={styles.photoNoticia}></div>
          <div className={styles.contentPhotoNoticia}>
            <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
            <span>Postado em 00/00/00</span>
          </div>
        </li>
        <li>
          <div className={styles.photoNoticia}></div>
          <div className={styles.contentPhotoNoticia}>
            <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
            <span>Postado em 00/00/00</span>
          </div>
        </li>
        <li>
          <div className={styles.photoNoticia}></div>
          <div className={styles.contentPhotoNoticia}>
            <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
            <span>Postado em 00/00/00</span>
          </div>
        </li>
      </ul>
      <button className={styles.button}>Ver mais notícias</button>
    </div>
  );
}

export default Noticias