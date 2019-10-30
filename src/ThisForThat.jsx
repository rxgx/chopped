import React, { useState } from "react";
import ThisForThatStyled from './ThisForThatStyled';

export function getRandomValue(values) {
  const value = values[Math.floor(Math.random() * values.length)];
  return value;
}

export default function ThisForThat (props) {
  const [count, setCount] = useState(0);
  
  const site = getRandomValue(props.sites);
  const thing = getRandomValue(props.things);

  function handleClickEvent() {
    setCount(count + 1);
  }

  return (
    <ThisForThatStyled className="container">
      <p>
        <strong className="output">{site}</strong>
        <em className="separator">for</em>
        <strong className="output">{thing}</strong>
      </p>
      <p className="content">
        <button
          className="button hitarea"
          onClick={handleClickEvent}
          type="button"
        >
          Try Again
        </button>
      </p>
    </ThisForThatStyled>
  );
}
