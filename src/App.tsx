// import pomegranate from './assets/pomegranate.png'
import afisha from './assets/afisha.jpeg'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <div className={styles.pomegranate} style={{backgroundImage: `url(${afisha})`}}/>
      <div className={styles.heroWrapper}>
        {/*<div className={styles.text}>*/}
          {/*<h1 className={styles.glitch} data-text={'The Sound of Pomegranates'}>The Sound of Pomegranates</h1>*/}
          {/*<div className={styles.hr}/>*/}
          {/*<h2 className={styles.glitch} data-text={'Նռան ձայնը'}>Նռան ձայնը</h2>*/}
          {/*<div className={styles.subtitle}>*/}
          {/*  <div>[28/03/2024 7PM] Common Ground</div>*/}
          {/*  <div>Evening of experimental music</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    </>
  )
}

export default App
