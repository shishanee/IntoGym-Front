import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Profile.module.scss";
import SideBar from "./SideBar";
import { authSignOut } from "../../../features/applicationSlice";

const SignOut: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/");
      dispatch(authSignOut());
    }, 100);
  };
  return (
    <div className={styles.mainBlock}>
      <SideBar />
      <div className={styles.linksSignOut}>
        <h1>Вы уверены что хотите выйти?</h1>
        <div>
          <button onClick={handleClick}>Да</button>
          <Link to={"/profile"}>Нет</Link>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
