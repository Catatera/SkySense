import React from "react";
import styles from "./Main.scss"
function Button() {
  
    function change() {
    console.log("OK");
  }

  return (
    <div className={styles.divBtn}>
      <button onClick={change} className={styles.btn}>Consultar</button>
    </div>
  );
}

export default Button;
