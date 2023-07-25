import styles from "./Header.module.scss";
import adressImage from "../../../public/Icon material-my-location.png";
import phone from "../../../public/Icon feather-phone.png";
import mail from "../../../public/Icon feather-mail.png";
import facebook from "../../../public/Icon awesome-facebook.png";
import instagram from "../../../public/Icon awesome-instagram.png";
import twitter from "../../../public/Icon awesome-twitter.png";
import youtube from "../../../public/Icon awesome-youtube.png";
import linkedin from "../../../public/Icon awesome-linkedin.png";
import sport from "../../../public/Icon ionic-ios-fitness.png";
import { Link } from "react-router-dom";
import parseJWT from '../../helpers/parseJwt.js'
import { useSelector } from "react-redux";
import ava from '../../../public/user (1).png'

const Header = () => {
  const token = useSelector((state) => state.application.token)
  return (
    <header>
      <div className={styles.firstBlock}>
        <div className={styles.itemBlock}>
          <img src={adressImage} alt="" />
          &nbsp; <p>Address:</p> &nbsp; Moscow, Russia
        </div>
        <div className={styles.itemBlock}>
          <img src={phone} alt="" />
          &nbsp;
          <p>Call:</p> &nbsp; + 7928 888 64 89
        </div>
        <div className={styles.itemBlock}>
          <img src={mail} alt="" />
          &nbsp;
          <p>Email:</p>&nbsp; mansur72095@gmail.com
        </div>
        <div className={styles.links}>
          <Link to={"#"}>
            {" "}
            <img src={twitter} alt="" />
          </Link>
          <Link to={"#"}>
            <img src={youtube} alt="" />
          </Link>
          <Link to={"#"}>
            <img src={linkedin} alt="" />
          </Link>
          <Link to={"#"}>
            <img src={instagram} alt="" />
          </Link>
          <Link to={"#"}>
            <img src={facebook} alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.blockDuo}>
        <div className={styles.blockTwo}>
          <div className={styles.logo}>
            <img src={sport} alt="" />
            <h3>INTO GYM</h3>
          </div>
          <div className={styles.navbar}>
            <Link to={"/"}>HOME</Link>
            <Link to={"#"}>PAGES</Link>
            <Link to={"#"}>PORTFOLIO</Link>
            <Link to={"#"}>CLASSES</Link>
            <Link to={"#"}>BLOG</Link>
            <Link to={"#"}>CONTACTS</Link>
          </div>
          <div className={styles.join}>
            {!token ? <Link to={"/sign"}>GET STARTED ❯ ❯ ❯</Link>: <div className={styles.profile}> <img src={ava} alt="" /> &nbsp;&nbsp;&nbsp; <Link to={"/profile"}>Go To Profile</Link></div> }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
