import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import styles from "./App.module.scss"; // Certifique-se de importar seu arquivo de estilos aqui
import fotoFrio from "../public/media/fotoFrio.webp";
import fotoCalor from "../public/media/fotoCalor.webp";
import fotoPadrao from "../public/media/fotoPadrao.webp";

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState(fotoPadrao); // Defina a imagem padrão como fotoPadrao

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Header />
        <Main
          setBackgroundImage={setBackgroundImage}
          fotoFrio={fotoFrio}
          fotoCalor={fotoCalor}
          fotoPadrao={fotoPadrao}
        />
      </div>
    </>
  );
}
