import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/globals/header.js'
import Footer from '../components/globals/footer.js'
import Login from '../styles/LogIn.module.css'

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>Yellow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div id="id01" className={Login.modal}>
    
          <form className={Login.modalContent} action="/home" method="post">
            <div className={Login.imgcontainer}>
              <span className={Login.close} title="Close Modal"><a href = "/">&times;</a></span>
            </div>

            <div className={Login.container}>
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required></input>

              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email Address" name="email" required></input>

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required></input>
                
              <label for="psw"><b>Confirm Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required></input>
              
              <label for="code"><b>Discount Code (optional)</b></label>
              <input type="text" placeholder="Enter Code" name="code"></input>
                
              <button type="submit">Sign Up</button>
            </div>

            <div className={Login.container}>
              <button type="button" className={Login.cancelbtn}><a href = "/">Cancel</a></button>
              {/* <span className={Login.psw}><a href="#">Forgot Password?</a></span> */}
            </div>
          </form>
        </div>

      </main>

    </div>
  )
}