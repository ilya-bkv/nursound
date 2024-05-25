// import afisha from './assets/afisha.png'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <div className={styles.pomegranate}
        // style={{backgroundImage: `url(${afisha})`}}
      >
        <h1>Global Drone Day / Vanadzor / Boo Café (part2)</h1>

        <iframe
          className={styles.stream}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7LF90NCnkl4?si=bOUYuSvkCr83Krrb"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

        </iframe>
        <h2 style={{marginTop: '4rem'}}>Global Drone Day / Vanadzor / Boo Café (part1)</h2>
        <iframe
          className={styles.stream}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OfjA68AwoHM?si=nceqyoKy845E2mhr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

        </iframe>
      </div>
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
