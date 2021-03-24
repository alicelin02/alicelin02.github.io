import Head from 'next/head'
import styles from '../../../styles/Transactions.module.css'
import Header from '../../../components/globals/header-internal.js'
import Footer from '../../../components/globals/footer.js'
import Image from 'next/image'

const History = () => {
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

            <div className={styles.stash}>

              <Image 
                src="/svg/jewel.svg"
                alt="Image of jewel"
                width={118}
                height={111}
              />

              <span className={styles.quantity}>312</span>

              <div className={styles.nav}><a className={styles.ctaButton} href="/manage-stash">Manage Stash</a><a className={styles.ctaButton} href="/manage-stash/view-stash">My Stash</a><a className={styles.ctaButton} href="/manage-stash/subscription">Subscription</a><a className={styles.ctaButton} href="/manage-stash/history">History</a></div>

            </div>

            <h2 className={styles.title}>History</h2>

            <div className={styles.stashBody}>

              <div className={styles.links}>

                <p className={styles.ctaButton}>60 Jewels (23/2/21 12:35)</p>
                <p className={styles.ctaButton}>50 jewels (31/1/21 12:15)</p>
                <p className={styles.ctaButton}>10 Jewels (23/1/21 12:35)</p>
                <p className={styles.ctaButton}>8 Jewels (23/12/20 12:35)</p>
                <p className={styles.ctaButton}>6 Jewels (23/11/20 12:35)</p>

              </div>

              <div className={styles.description}>
                <p>Here you can see your most recent purchases and full purchase history.</p>

                <a className={styles.ctaButton}>View full history</a>
                <a className={styles.ctaButton} href="/store">Purchase more jewels</a>
                <a className={styles.ctaButton}>Send and receive jewels</a>

              </div>


            </div>

          </article>

        </article>

        {/* <Footer /> */}

      </main>


    </div>
  )
}

export default History;