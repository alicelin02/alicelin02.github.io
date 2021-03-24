import Head from 'next/head'
import styles from '../../styles/Subscription.module.css'
import Header from '../../components/globals/header-internal.js'
import Footer from '../../components/globals/footer.js'
import Image from 'next/image'

const Subscription = () => {
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

            <h2 className={styles.title}>Subscription</h2>

            <div className={styles.stashBody}>

              <Image 
                src="/svg/three.svg"
                alt="Image of jewel"
                width={118}
                height={111}
              />

              <div className={styles.description}>
                25 Jewels
              </div>

              <Image 
                src="/svg/two.svg"
                alt="Image of jewel"
                width={118}
                height={111}
              />

              <div className={styles.description}>
                10 Jewels
              </div>



              <Image 
                src="/svg/jewel.svg"
                alt="Image of jewel"
                width={118}
                height={111}
              />


              <div className={styles.description}>
                Custom Amount
              </div>

            </div>

            <div className={styles.linkWrapper}>
              <a className={styles.ctaLink}>Order Now</a>
            </div>

          </article>

        </article>

        {/* <Footer /> */}

      </main>


    </div>
  )
}

export default Subscription;