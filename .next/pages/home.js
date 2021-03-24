import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/globals/header-internal.js'
import Footer from '../components/globals/footer.js'

export default function Home() {
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

            <Image 
              src="/img/dog.png"
              alt="Dog jumping and looking happy"
              width={300}
              height={400}
            />

            <h2 className={styles.title}>Puppy Power is here!</h2>
            <a className={styles.ctaButton} href="/games/game">Play Now</a>

          </article>

          {/* <article className={styles.section}>

            <h2 className={styles.title}>Start Playing Puppy Power Now!</h2>


          </article> */}

        </article>

        {/* <Footer /> */}

      </main>


    </div>
  )
}