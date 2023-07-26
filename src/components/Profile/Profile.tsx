import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import parseJWT from "../../helpers/parseJwt.js";
import SideBar from "./SideBar/SideBar.js";
import { useState } from "react";

const Profile = () => {
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.user.user);
  const follow = useSelector((state) => state.user.follow);
  const [name, setName] = useState("");
  setTimeout(() => {
    setName(follow[0].name);
  }, 100);

  return (
    <div className={styles.mainBlock}>
      <SideBar />
      <div>
        <div>{token && <h1>Здраствуйте, {user.name}</h1>}</div>
        <div className={styles.followCheck}>
          <h3> Ваш абонемент: &nbsp;&nbsp;</h3>
          {follow.length === 0 ? (
            <h3 className={styles.error}>У вас нет абонемента!</h3>
          ) : (
            <h2 className={styles.followName}>{name}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
