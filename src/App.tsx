import afisha from './assets/14sent.jpg'
import styles from './App.module.scss'

function App() {
  const circles = [];
  for (let i = 1; i <= 100; i++) {
    circles.push(<div key={i} className={styles.circleContainer}><div className={styles.circle}></div></div>);
  }
  return (
    <>
      <div className={styles.pomegranate}
        style={{backgroundImage: `url(${afisha})`}}
      >
        {circles}
      </div>
    </>
  )
}

export default App
