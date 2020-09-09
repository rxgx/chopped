import styles from './Layout.module.css'

export default function Layout (props) {
  return (
    <div className={styles.layout}>
      <header>
        <h1 className={styles.heading}>
          <strong className={styles.word}>Chopped</strong>
          <em className={styles.separator}>simulator</em>
        </h1>
        <p className={styles.intro}>
          Are you ready to put your culinary skills to work?<br />Let's see what's in your basket!
        </p>
      </header>
      {props.children}
    </div>
  )
}
