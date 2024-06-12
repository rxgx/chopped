import Image from 'next/image'
import styles from './Layout.module.css'

export default function Layout (props) {
  return (
    <main className={styles.root}>
      <header>
        <h1 className={styles.heading}>
          <Image
            width={80}
            src='./shopping.svg'
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
            alt=''
          />
          &nbsp;
          <strong className={styles.word}>Chopped</strong>
          <em className={styles.separator}>simulator</em>
        </h1>
        <p className={styles.intro}>
          Are you ready to put your culinary skills to work?
        </p>
      </header>
      <article>{props.children}</article>
      <footer>
        Icons made by{' '}
        <a
          href='https://www.flaticon.com/free-icon/shopping_3081893'
          title='iconixar'
        >
          iconixar
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          {' '}
          www.flaticon.com
        </a>
      </footer>
    </main>
  )
}
