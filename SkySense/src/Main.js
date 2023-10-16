import React, { useState } from "react";
import styles from "./Main.module.scss";
const api = {
  key: "3ee32176fbc4070662893138e0e9dea6",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

export default function Main({
  setBackgroundImage,
  fotoFrio,
  fotoCalor,
  fotoPadrao,
}) {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        `${api.base}?q=${inputValue}&lang=pt_br&units=metric&appid=${api.key}`
      );

      if (!response.ok) {
        alert("Cidade não encontrada. Por favor, revise sua consulta.");
      } else {
        const data = await response.json();
        setWeatherData(data);

        let backgroundImageUrl = data.main.temp < 15 ? fotoFrio : fotoCalor;

        setBackgroundImage(backgroundImageUrl);
      }
    } catch (error) {
      console.error("Erro ao buscar dados do clima:", error);
    }
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className={styles.main}>
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
                })}
              </strong>
            </p>
          </>
        ) : (
          <p>Digite a cidade no campo abaixo</p>
        )}
      </div>

      <div className={styles.btnDiv}>
        <input value={inputValue} onChange={handleChange} />
        <button className={styles.btn} onClick={fetchData}>
          &#128269;
        </button>
      </div>
    </div>
  );
}
