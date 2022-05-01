import React, { useState } from "react";
import Quote from "../Quote/Quote";
import quotes from "../../quotes.json";
import "./Designe.css";
const Designe = () => {
  //RANDOM colores
  const colors = ["#845EC2", "#D65DB1", "#FF9671", "#F9F871", "#0081CF"];
  const ranCol = Math.floor(Math.random() * colors.length);
  const [random, setRandom] = useState(ranCol);

  //RANDOM  quotes
  const ranQuo = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(ranQuo);
  return (
    <div>
      <button
        style={{ background: `${colors[random]}` }}
        onClick={() => {
          const ranCol = Math.floor(Math.random() * colors.length);
          setRandom(ranCol);
          const ranQuo = Math.floor(Math.random() * quotes.length);
          setQuote(ranQuo);
        }}
      >
        <Quote color={colors[random]} quote={quotes[quote]} />
        cambiar
      </button>
    </div>
  );
};

export default Designe;
