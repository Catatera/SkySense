import React, { useState } from "react";
import styles from "./Main.scss";
function btnDiv() {
  const state = useState();

  function handleChange() {
    console.log("OK");
  }

  return (
    <div className={styles.btnDiv}>
      <input></input> <br/>
      <button onClick={handleChange} className={styles.btn}>
        Consultar
      </button>
    </div>
  );
}

export default btnDiv;
