import React from 'react'
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid, eos impedit nam eveniet libero beatae, adipisci harum, natus ducimus blanditiis quidem voluptates rerum minima fugiat totam dignissimos quisquam dolorem!</p>
        </div>
        <div className={styles.information}>
            <h3>INFORMATION</h3>
        <p><Link to={"#"}>ABOUT US</Link></p>
        <p><Link to={"#"}>CUSTOMERS</Link></p>
        <p><Link to={"#"}>CLIENTS</Link></p>
        <p><Link to={"#"}>PORTFOLIO</Link></p>  
        </div>
        <div className={styles.information}>
            <h3>SERVICES</h3>
        <p><Link to={"#"}>TRAINING AT HOME</Link></p>
        <p><Link to={"#"}>FITNESS FOR KIDS</Link></p>
        <p><Link to={"#"}>ONLINE COACH</Link></p>
        <p><Link to={"#"}>CHAMPIONS</Link></p>  
        </div>
        <form > 
            <h3>SUBSCRIBE TO NEWSLETTER</h3>
            <input type="text" placeholder='EMAIL'/>
            <button>SUBCRIBE</button>
        </form>
        </div>
        <hr />
        <div className={styles.lower_info}>
            <div className={styles.contacts}>
                <span>Copyright @ 2020 All Rights Reserved.</span>
                <span>+7 (989)-909-91-98 </span>
                <span>gaitukaev777@mail.ru</span>
                <span>Чечня, Грозный</span>
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