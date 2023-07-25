import { Link } from "react-router-dom";
import styles from "./Sign.module.scss";
import gym from "../../../public/5-Reasons-Why-Your-Residential-Building-Needs-a-Professional-Gym-Banner-1200x620.jpg";

const Sign = () => {
  return (
    <div className={styles.signBlock}>
      <img src={gym} alt="" />
      <div className={styles.links}>
        <Link to={"/register"}>Регистрация</Link>
        <span>или</span>
        <Link to={"/login"}>Вход</Link>
      </div>
    </div>
  );
};

export default Sign;
