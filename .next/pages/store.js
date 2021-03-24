import Head from 'next/head'
import styles from '../styles/Store.module.css'
import Header from '../components/globals/header-internal.js'
import Footer from '../components/globals/footer.js'
import Image from 'next/image'

const Store = () => {
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

            </div>

            <h2 className={styles.title}>Store</h2>

            <div className={styles.stashBody}>

              <Image 
                src="/svg/three.svg"
                alt="Image of jewel"
                width={118}
                height={111}
              />

              <div className={styles.description}>
                Purchase Jewels <br />
                <small>1 <Image src="/svg/jewel.svg" alt="Jewel" width={18} height={18} /> = £1</small>
              </div>

              <div><small>*</small></div>

              <Image 
                src="/img/panda.png"
                alt="Image of jewel"
                width={100}
                height={130}
              />

              <div className={styles.description}>
                Unlock Panda Game <br /><small>8 <Image src="/svg/jewel.svg" alt="Jewel" width={18} height={18} /></small>
              </div>

              <div><small>*</small></div>

              <Image 
                src="/svg/two.svg"
                alt="Image of jewel"
                width={118}
                height={60}
              />


              <div className={styles.description}>
                Send <Image src="/svg/jewel.svg" alt="Jewel" width={18} height={18} /> to a friend<br />
                <small>1 <Image src="/svg/jewel.svg" alt="Jewel" width={18} height={18} /> = £1</small>
              </div>

            </div>

            <div className={styles.stashBody}>

<Image 
  src="/svg/game.svg"
  alt="Image of game"
  width={118}
  height={111}
/>

<div className={styles.description}>
  Purchase PowerUps <br />
  <small>1 <Image src="/svg/jewel.svg" alt="Jewel" width={18} height={18} /> = 1 PowerUp</small>
</div>

<div><small>*</small></div>

<Image 
  src="/svg/mystery.svg"
  alt="Image of mystery"
  width={100}
  height={60}
/>

<div className={styles.description}>
  Unlock Mystery Character <br /><small>6 <Image src="/svg/jewel.svg" alt="Jewel" width={18} height={18} /></small>
</div>

<div><small>*</small></div>

<Image 
  src="/svg/game.svg"
  alt="Image of mystery"
  width={100}
  height={60}
/>


<div className={styles.description}>
  Purchase SuperPowerUps<br />
  <small>5 <Image src="/svg/jewel.svg" alt="Jewel" width={18} height={18} /></small>
</div>

</div>

            <div className={styles.linkWrapper}>
              {/* <a className={styles.ctaLink}>Order Now</a> */}
            </div>
            
          </article>


        </article>

        {/* <Footer /> */}

      </main>


    </div>
  )
}

export default Store;