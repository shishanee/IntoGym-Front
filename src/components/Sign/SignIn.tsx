import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Sign.module.scss";
import gym from "../../../public/home gym.webp";
import { AppDispatch, RootState } from "../../app/store";

const SignIn: React.FC = () => {
  const error = useSelector((state: RootState) => state.application.error);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSign, setIsSign] = useState<boolean>(false);


  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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
