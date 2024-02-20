import pomegranate from './assets/pomegranate.png'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <div className={styles.pomegranate} style={{backgroundImage: `url(${pomegranate})`}}/>
      <div className={styles.heroWrapper}>
        <div className={styles.text}>
          <h1 className={styles.glitch} data-text={'NURSOUND'}>NURSOUND</h1>
          <h2 className={styles.glitch} data-text={'Նռան ձայնը'}>Նռան ձայնը</h2>
          <div>[28/03/2024] Common Ground</div>
          <div>Evening of experimental music</div>
        </div>
      </div>
    </>
  )
}

export default App
