import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Sign.module.scss";
import gym from "../../../public/home gym.webp";

const SignIn: React.FC = () => {
  const error = useSelector((state) => state.application.error);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSign, setIsSign] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    await dispatch(authSignIn({ login, password }));
    setIsSign(true);
  };

  useEffect(() => {
    if (isSign && !error) {
      navigate("/");
    }
  }, [isSign, error, navigate]);

  return (
    <div className={styles.signInMainBlock}>
      <div className={styles.signInMain}>
        <div className={styles.signInBlock}>
          <h1>Войдите в аккаунт</h1>
          <input
            onChange={changeLogin}
            value={login}
            type="text"
            placeholder="Login"
          />
          <input
            onChange={changePassword}
            value={password}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleLogin}>Sign In</button>
          <br />
          {error}
        </div>
        <div className={styles.imageBlock}>
          <img src={gym} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
