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
import { useSelector } from "react-redux";
import ava from '../../../public/user (1).png'
import home from '../../../public/home.png'
import shop from '../../../public/store (1).png'
import cart from '../../../public/shopping-cart (1).png'
import workout from '../../../public/gym.png'

const Header = () => {
  const token = useSelector((state) => state.application.token)
  return (
    <header>
      <div className={styles.blockDuo}>
        <div className={styles.blockTwo}>
          <div className={styles.logo}>
            <img src={sport} alt="" />
            <h3>INTO GYM</h3>
          </div>
          <div className={styles.navbar}>
            <div className={styles.linkNav}>
              <img src={home} alt="" /> &nbsp;&nbsp;
            <Link to={"/"}>HOME</Link>
            </div>
            <div className={styles.linkNav}>
            <img src={shop} alt="" />&nbsp;&nbsp;
            <Link to={"/shop"}>SHOP</Link>
            </div>
            <div className={styles.linkNav}>
            <img src={cart} alt="" />&nbsp;&nbsp;
            <Link to={"#"}>WORKOUT</Link>
            </div>
            <div className={styles.linkNav}>
            <img src={workout} alt="" />&nbsp;&nbsp;
            <Link to={"#"}>CART</Link>
            </div>
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
