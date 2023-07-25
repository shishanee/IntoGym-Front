import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import parseJWT from "../../helpers/parseJwt.js";

const Profile = () => {
  const token = useSelector((state) => state.application.token);
  console.log(parseJWT(token).follow[0])
  return (
    <div className={styles.profileMain}>
      <div className={styles.profileBlock}>
        <div className={styles.sideBar}>
          <button>Профиль</button>
          <button>Выйти</button>
        </div>
        <div>{token && <h1>Здраствуйте, {parseJWT(token).name}</h1>}</div>
      </div>
    </div>
  );
};

export default Profile;
