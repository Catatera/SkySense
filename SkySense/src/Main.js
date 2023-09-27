import React, { useState } from "react";
import styles from "./Main.scss";

const api = {
  key: "3ee32176fbc4070662893138e0e9dea6",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

export default function Main() {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData() {
    if (!inputValue) return; // Evite fazer a chamada API sem um valor válido

    try {
      const response = await fetch(
        `${api.base}?q=${inputValue}&lang=pt_br&units=metric&appid=${api.key}`
      );

      if (!response.ok) {
        alert('Cidade não encontrada. Por favor, revise sua consulta.');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className={styles.main}>
      <div className={styles.mainDivImg}>
        <img src="/media/sun.png" className={styles.mainImg} alt="Sun" />
      </div>
      <div className={styles.mainDivTxt}>
        {weatherData ? (
          <>
            <p>
              <strong> &#127777; {weatherData.main.temp}°C</strong>
            </p>
            <p>
              <strong>&#128204; {weatherData.name}</strong>
            </p>
            <p>
              <strong>
                &#9200;{" "}
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })  }
              </strong>
            </p>
          </>
        ) : (
          <p>Digite a cidade no campo abaixo</p>
        )}
      </div>

      <div className={styles.btnDiv}>
        <input value={inputValue} onChange={handleChange}/>
        <button className={styles.btn} onClick={fetchData}>
          &#128269;
        </button>
      </div>
    </div>
  );
}
