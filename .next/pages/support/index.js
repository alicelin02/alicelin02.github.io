import Head from 'next/head'
import styles from '../../styles/ViewStash.module.css'
import Header from '../../components/globals/header-internal.js'
import Footer from '../../components/globals/footer.js'
import Image from 'next/image'

const Support = () => {
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

            <h2 className={styles.title}>Support</h2>

            <div className={styles.stashBody}>

              <div className={styles.links}>

                <p className={styles.ctaButton}>Game Tutorial</p>
                <p className={styles.ctaButton}>Payment Support</p>
                <p className={styles.ctaButton}>Account & Settings Queries</p>
                <p className={styles.ctaButton}>Legal, Privacy & Security</p>
                <p className={styles.ctaButton}>Technical Help</p>
                <p className={styles.ctaButton}>Send us a message</p>

              </div>

              <div className={styles.description}>
                Can't see your question? Send us a message using the form to the left or drop us an email at <small>support@puppypower.com</small>
              </div>

            </div>

          </article>

        </article>

        {/* <Footer /> */}

      </main>


    </div>
  )
}

export default Support;