import React from "react";

import Header from "./Header";
import Main from "./Main";
import styles from "./App.scss"
export default function App() {
  const api = {
    key: "3ee32176fbc4070662893138e0e9dea6",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </>
  );
}
