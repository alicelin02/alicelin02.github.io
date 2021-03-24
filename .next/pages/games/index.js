import Head from 'next/head'
import styles from '../../styles/Games.module.css'
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

            <h2 className={styles.title}>Let's Play!</h2>

            {/* <Image 
              src="https://picsum.photos/611/325"
              alt="Preview of game name"
              width={611}
              height={325}
            /> */}

            <a href="/games/game"><Image className={styles.gamePreview} src="/img/image.jpg" alt="Game preview" width={300} height={300} /></a>

            <h3 className={styles.gameName}><a href="/games/game">Puppy Power</a></h3>

            <a href="/games/game" className={styles.ctaButton}>Play now</a>

          </article>

        </article>


      </main>

      {/* <Footer /> */}

    </div>
  )
}

export default Games;