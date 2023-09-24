import React from "react";

import styles from "./Main.scss";
import Button from "./Button";

let temperature = "27º";
let hours = "12:00";
let city = "Cambuí";

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainDivImg}>
          <img src="/media/sun.png" className={styles.mainImg}></img>
        </div>
        <div className={styles.mainDivTxt}>
          <p>
            <strong>&#128204; {temperature}</strong>
          </p>
          <p>
            <strong>&#128204; {city}</strong>
          </p>
          <p>
            <strong>&#128204; {hours}</strong>
          </p>
        </div>
        <Button className={styles.botao} />
      </div>
    </>
  );
}
