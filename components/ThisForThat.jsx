import React, { useState } from "react";
import styles from './ThisForThat.styles.css';

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
    <ThisForThatStyled className={styles.container}>
      <p>
        <strong className={styles.output}>{site}</strong>
        <em className={styles.separator}>for</em>
        <strong className={styles.output}>{thing}</strong>
      </p>
      <p className={styles.content}>
        <button
          className={[styles.button, styles.hitarea].join(' ')}
          onClick={handleClickEvent}
          type="button"
        >
          Try Again
        </button>
      </p>
    </ThisForThatStyled>
  );
}
