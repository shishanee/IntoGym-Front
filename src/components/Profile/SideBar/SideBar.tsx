import { Link } from "react-router-dom";
import styles from "../Profile.module.scss";

const SideBar: React.FC = () => {
  return (
    <div className={styles.sideBar}>
      <Link to={"/profile"}>Профиль</Link>
      <Link to={"/balance"}>Пополнить баланс</Link>
      <Link to={"/signOut"}>Выйти</Link>
    </div>
  );
};

export default SideBar;
