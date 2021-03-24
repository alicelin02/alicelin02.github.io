import Head from 'next/head'
import styles from '../../styles/ViewStash.module.css'
import Header from '../../components/globals/header-internal.js'
import Footer from '../../components/globals/footer.js'
import Image from 'next/image'

const ViewStash = () => {
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

            <h2 className={styles.title}>My Stash</h2>

            <div className={styles.stashBody}>

              <div className={styles.links}>

                <p className={styles.ctaButton}>Last payment: 50 jewels (23/2/21 12:35)</p>
                <p className={styles.ctaButton}>Next payment: 50 jewels (31/4/21 12:15)</p>
                <p className={styles.ctaButton}>Last Month's Jewel Total: 262 Jewels</p>

              </div>

              <div className={styles.description}>
                See your most recent jewel purchases.
              </div>

            </div>

          </article>

        </article>

        {/* <Footer /> */}

      </main>


    </div>
  )
}

export default ViewStash;