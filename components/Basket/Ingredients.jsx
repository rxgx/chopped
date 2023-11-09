import React from 'react';
import styles from './Ingredients.module.css'

export default function Ingredients ({ basket }) {
    if (!basket) return null
    return (
        <ul>
        {basket.map(item => (
            <li key={item.label} className={styles.ingredient}>
                {item.label}
            </li>
        ))}
        </ul>
    )
}
