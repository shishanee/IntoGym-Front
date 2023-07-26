import React from 'react'
import styles from "./AboutUs.module.scss"
import envelope from "../../../public/envelope.svg"
import location from "../../../public/location.svg"
import call from "../../../public/call_FILL0_wght400_GRAD0_opsz48.svg"

function AboutUs() {
  return (
    <>
    <div className={styles.imgBLock}>
      <h1>CONTACT US </h1>
      <p>PAGES-CONTACTS</p>
    </div>
     <div className={styles.contacts_block}>
        <div className={styles.geo}>
        <h3>- ABOUT US</h3>
        <h2>DON`T AFRAID TO CONTACT US</h2>
        <hr />
    <div className={styles.envelope}>
        <img src={envelope} alt="" />
        <div>
          <p>gaitukaev777@mail.ru</p>
          <p>miketayson01@mail.ru</p>
        </div>
    </div>
    <div className={styles.envelope}>
        <img src={location} alt="" />
        <div>
        <p>Address: Moscow, Russia</p>
        </div>
    </div>
    <div className={styles.envelope}>
        <img src={call} alt="" />
        <div>
          <p>+7 (989)-909-91-98</p>
        </div>
    </div>
        </div>
        <div className={styles.send_question}>
        <h3>- CONTACT US</h3>
        <h2>SEND YOUR QUESTIONS !</h2>
        <div>
        <input type="text" placeholder='FULL NAME' />
        <input type="text" placeholder='EMAIL'/> <br />
        <input type="text" placeholder='PHONE'/>
        <input type="text" placeholder='SUBJECTS' />
        </div>
        <textarea name="" id="" cols="45" rows="10" placeholder='MESSAGE'></textarea>
        <button>SEND EMAIL</button>
        </div>
     </div>
     <div className={styles.map} style={{ position: "relative", overflow: "hidden" }}>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=45.692614%2C43.324616&mode=search&oid=50266658498&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ29M9qq2EZAEaX2ItqOqUVAEhIJ%2BWcG8YEdtz8ReHsQAvIlpD8iBgABAgMEBSgKOABAqZ8NSAFqAnJ1nQHNzEw9oAEAqAEAvQEEnFDawgEGwq2BobsB6gEA8gEA%2BAEAggIO0JjQvdGC0YPQutC%2B0LSKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=45.692614%2C43.324616&sspn=0.005016%2C0.002186&text=%D0%98%D0%BD%D1%82%D1%83%D0%BA%D0%BE%D0%B4&z=18.17" width="100%" height="400px" frameborder="1" allowfullscreen="true" style={{ position: "relative" }}></iframe>
    </div>
    </> 
  )
}

export default AboutUs