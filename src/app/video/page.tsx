'use client';

import styles from "./page.module.css";

export default  function About() {
  return (
    <div className={styles.video}>
      <video controls autoPlay loop>
        <source  src='Design_sem_nome.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
