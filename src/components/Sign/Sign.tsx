import { Link } from "react-router-dom";
import styles from "./Sign.module.scss";
import gym from "../../../public/home gym.webp";

const Sign = () => {
  return (
    <div className={styles.signMain}>
      <div className={styles.signBlock}>
        <div className={styles.links}>
          <Link to={"/register"}>Регистрация</Link>
          <span>или</span>
          <Link to={"/login"}>Вход</Link>
        </div>
        <div className={styles.imageBlock}>
          <img src={gym} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sign;
