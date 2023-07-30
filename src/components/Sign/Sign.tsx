import { Link } from "react-router-dom";
import styles from "./Sign.module.scss";
import gym from "../../../public/home gym.webp";

const Sign: React.FC = () => {
  return (
    <div className={styles.signMain}>
      <div className={styles.signBlock}>
        <div className={styles.links}>
          <Link to={"/register"}>Sign Up</Link>
          <span>or</span>
          <Link to={"/login"}>Sign In</Link>
        </div>
        <div className={styles.imageBlock}>
          <img src={gym} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sign;
