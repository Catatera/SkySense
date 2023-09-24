import React from "react";

import styles from "./Header.scss";

export default function Header() {
  return (
    <>
      <header>
        <h1 className={styles.title}>SkySense</h1>
        <h2>Seu Guia para Previsões Precisas</h2>
      </header>
    </>
  );
}
