import Head from 'next/head'
import styles from '../../styles/Games.module.css'
import Header from '../../components/globals/header.js'
import Footer from '../../components/globals/footer.js'
import Image from 'next/image'

const Stories = () => {
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

            <h2 className={styles.title}>Stories</h2>

            {/* <Image 
              src="https://picsum.photos/611/325"
              alt="Preview of game name"
              width={611}
              height={325}
            /> */}

            <a href="/game"><img className={styles.gamePreview} src="https://picsum.photos/611/325" /></a>

            <h3 className={styles.gameName}><a href="/game">Plot name here</a></h3>

            <a href="/game" className={styles.ctaButton}>Play now</a>

          </article>

        </article>


      </main>

      {/* <Footer /> */}

    </div>
  )
}

export default Stories;