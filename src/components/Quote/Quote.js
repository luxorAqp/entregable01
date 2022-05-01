import React, { useState } from "react";
import quotes from "../../quotes.json";
import "./Quote.css";
const Quote = ({ color, quote }) => {
  console.log("quote ==>" + quote);
  return (
    <body style={{ background: `${color} ` }}>
      <div className="quote-container">
        <div className="quote-item">
          <i
            className="fa-solid fa-quote-left head-item"
            style={{ color: `${color}` }}
          ></i>
          {/* <i className="head-item"></i> */}
          <p className="head-item" style={{ color: `${color}` }}>
            {quote.quote}
          </p>
        </div>
        <div className="quote-item">
          <p className="author-item" style={{ color: `${color}` }}>
            {quote.author}
          </p>
        </div>
        <div className="quote-item"></div>
      </div>
    </body>
  );
};

export default Quote;

{
  /* <h1 style={{ color: `${color}` }}>{quote.quote}</h1>
      <h2 style={{ color: `${color}` }}> {quote.author}</h2> */
}
