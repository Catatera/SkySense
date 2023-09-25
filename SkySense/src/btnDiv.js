import React, { useState } from "react";
import styles from "./Main.scss";
function btnDiv() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick() { 
    console.log(inputValue)
  }

  return (
    <div className={styles.btnDiv}>
      <input value={inputValue} onChange={handleChange} />

      <br />

      <button className={styles.btn} onClick={handleClick}>
        Consultar
      </button>
    </div>
  );
}

export default btnDiv;
