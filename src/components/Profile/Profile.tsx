import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import parseJWT from "../../helpers/parseJwt.js";
import SideBar from "./SideBar/SideBar.js";

const Profile = () => {
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.mainBlock}>
      <SideBar />
      <div>
        <div>{token && <h1>Здраствуйте, {user.name}</h1>}</div>
        <div className={styles.followCheck}>
          Ваш абонемент: &nbsp;&nbsp;{" "}
          {user.follow ? (
            <p className={styles.error}>У вас нет абонемента</p>
          ) : (
            parseJWT(token).follow[0]
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
