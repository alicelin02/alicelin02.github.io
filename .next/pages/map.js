import Head from 'next/head'
import styles from '../styles/Map.module.css'
import Header from '../components/globals/header-internal.js'
import Footer from '../components/globals/footer.js'
import Image from 'next/image'

const ManageStash = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yellow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

      <div className={styles.close}>
        <a href="/manage-stash">
          <Image 
            src="/svg/close.svg"
            alt="Close Advert"
            width={36}
            height={36}
          />
        </a>
      </div>

      </main>


    </div>
  )
}

export default ManageStash;