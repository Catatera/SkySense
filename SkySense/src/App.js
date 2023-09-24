import React from "react";

import Header from "./Header";
import Main from "./Main";
import styles from "./App.scss"
export default function App() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </>
  );
}
