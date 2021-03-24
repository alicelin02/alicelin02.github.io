import Head from 'next/head'
import styles from '../../styles/Game.module.css'
import Header from '../../components/globals/header-internal.js'
import Footer from '../../components/globals/footer.js'
import Image from 'next/image'

const Games = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yellow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <article className={styles.wrapper}>

          <Header />

          <article className={styles.section}>

            {/* <h2 className={styles.title}>Puppy Power!</h2> */}

            <Image 
              className={styles.game}
              src="/img/start.jpg"
              alt="Game"
              width={1249}
              height={790}
            />

            {/* <a href="/game"><Image className={styles.gamePreview} src="/img/image.jpg" alt="Game preview" width={300} height={300} /></a>

            <h3 className={styles.gameName}><a href="/game">Puppy Power</a></h3>

            <a href="/game" className={styles.ctaButton}>Play now</a> */}

          </article>

        </article>


      </main>

      {/* <Footer /> */}

    </div>
  )
}

export default Games;