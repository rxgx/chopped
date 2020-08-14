import styles from './Layout.module.css'

export default function Layout (props) {
  return (
    <div className={styles.layout}>
      <header>
        <h1 className={styles.heading}>
          <strong className={styles.word}>This</strong>
          <em className={styles.separator}>for</em>
          <strong className={styles.word}>That</strong>
        </h1>
        <p className={styles.intro}>
          Do you have a second to spare?<br />Let me tell you my website idea.
        </p>
      </header>
      {props.children}
    </div>
  )
}
