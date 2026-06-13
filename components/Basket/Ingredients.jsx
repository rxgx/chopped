import React from 'react';
import styles from './Ingredients.module.css'

export default function Ingredients ({ basket, round }) {
    if (!basket || !round) return null
    return (
        <>
            <h2>{round.label} Round</h2>
            <ul>
            {basket.map(item => (
                <li key={item.label} className={styles.ingredient}>
                    {item.label}
                </li>
            ))}
            </ul>
        </>
    )
}
