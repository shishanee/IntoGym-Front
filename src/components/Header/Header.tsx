import styles from "./Header.module.scss";
import sport from "../../../public/Icon ionic-ios-fitness.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ava from "../../../public/user (1).png";
import home from "../../../public/home.png";
import shop from "../../../public/store (1).png";
import cart from "../../../public/shopping-cart (1).png";
import workout from "../../../public/gym.png";
import about from "../../../public/file.png";

const Header = () => {
  const token = useSelector((state) => state.application.token);
  return (
    <header>
      <div className={styles.blockDuo}>
        <div className={styles.blockTwo}>
          <div className={styles.logo}>
            <img src={sport} alt="" />
            <h3>INTO GYM</h3>
          </div>
          <div className={styles.navbar}>
            <Link to={"/"} className={styles.linkNav}>
              <img src={home} alt="" /> &nbsp;&nbsp; HOME
            </Link>
            <Link to={"/shop"} className={styles.linkNav}>
              <img src={shop} alt="" />
              &nbsp;&nbsp; SHOP
            </Link>
            <Link to={"/cart"} className={styles.linkNav}>
              <img src={cart} alt="" />
              &nbsp;&nbsp; CART
            </Link>
            <Link to={"#"} className={styles.linkNav}>
              <img src={workout} alt="" />
              &nbsp;&nbsp; WORKOUT
            </Link>
            <Link to={"/aboutUs"} className={styles.linkNav}>
              <img src={about} alt="" />
              &nbsp;&nbsp; ABOUT US
            </Link>
          </div>
          <div className={styles.join}>
            {!token ? (
              <Link to={"/sign"}>GET STARTED ❯ ❯ ❯</Link>
            ) : (
              <div className={styles.profile}>
                {" "}
                <img src={ava} alt="" /> &nbsp;&nbsp;&nbsp;{" "}
                <Link to={"/profile"}>Go To Profile</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
