import barbell from "../../../public/barbell.svg"
import facebook from "../../../public/facebook.svg"
import instagram from "../../../public/instagram.svg"
import twitter from "../../../public/twitter.svg"
import linkedin from "../../../public/linkedin.svg"
import youtube from "../../../public/youtube.svg"
import styles from "./Footer.module.scss"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer >
        <div className={styles.footerDiv}>

        <div className={styles.angelFit_block}>
    <div className={styles.angel_fit}>
        <img src={barbell} alt="" />
        <h2>INTOGYM</h2>
    </div>
        </div>
        <div className={styles.information}>
            <h3 className={styles.hThree}>INFORMATION</h3>
        <p><Link className={styles.link} to={"#"}>ABOUT US</Link></p>
        <p><Link className={styles.link} to={"#"}>CUSTOMERS</Link></p>
        <p><Link className={styles.link} to={"#"}>CLIENTS</Link></p>
        <p><Link className={styles.link} to={"#"}>PORTFOLIO</Link></p>  
        </div>
        <div className={styles.information}>
            <h3 className={styles.hThree}>SERVICES</h3>
        <p><Link className={styles.link} to={"#"}>TRAINING AT HOME</Link></p>
        <p><Link className={styles.link} to={"#"}>FITNESS FOR KIDS</Link></p>
        <p><Link className={styles.link} to={"#"}>ONLINE COACH</Link></p>
        <p><Link className={styles.link} to={"#"}>CHAMPIONS</Link></p>  
        </div>
        <form className={styles.form}> 
            <h3 className={styles.hThree}>SUBSCRIBE TO NEWSLETTER</h3>
            <input type="text" placeholder='EMAIL'/>
            <button>SUBCRIBE</button>
        </form>
        </div>
        <hr />
        <div className={styles.lower_info}>
            <div className={styles.contacts}>
                <span className={styles.span}>Copyright @ 2023 All Rights Reserved.</span>
                <span className={styles.span}>+7 (989)-909-91-98 </span>
                <span className={styles.span}>gaitukaev777@mail.ru</span>
                <span className={styles.span}>Russia, Moscow</span>
                <span className={styles.span}>Россия, Москва</span>
            </div>
            <div className={styles.logos}>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />   
            </div>
        </div>
    </footer>
  )
}

export default Footer