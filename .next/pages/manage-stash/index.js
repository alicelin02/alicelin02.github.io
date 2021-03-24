import Head from 'next/head'
import styles from '../../styles/ManageStash.module.css'
import Header from '../../components/globals/header-internal.js'
import Footer from '../../components/globals/footer.js'
import Image from 'next/image'

const ManageStash = () => {
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


            <h2 className={styles.title}>Manage Stash</h2>

            {/* <div className={styles.links}>

              {/* <a href="/manage-stash/set-up-stash" className={styles.ctaButton}>Start Earning Jewels</a> */}
              {/* <a href="/manage-stash/view-stash" className={styles.ctaButton}>My Stash</a>
              <a href="/manage-stash/history" className={styles.ctaButton}>History</a>
              <a href="/manage-stash/subscription" className={styles.ctaButton}>Subscription</a> */}
              {/* <a href="/manage-stash/stash-settings" className={styles.ctaButton}>Stash Settings</a> */}

            {/* </div> */}
            <div className={styles.stashBody}>


              <div className={styles.description}>
                Welcome to your stash! Manage your jewel collection and send gifts to friends.
              </div>

            </div>

          </article>

        </article>

        {/* <Footer /> */}

      </main>


    </div>
  )
}

export default ManageStash;