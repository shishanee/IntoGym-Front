import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../features/applicationSlice";
import { useNavigate } from "react-router-dom";
import gym from "../../../public/home gym.webp";
import styles from "./Sign.module.scss";
import { AppDispatch, RootState } from "../../app/store";


const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const error = useSelector((state: RootState) => state.application.error);
  const [isSign, setIsSign] = useState(false);

  const dispatch = useDispatch<AppDispatch>(); 
  const navigate = useNavigate();

  const changeLogin = (e) => {
    setLogin(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    await dispatch(authSignUp({ name, login, password }));
    setIsSign(true);
  };

  useEffect(() => {
    if (isSign && !error) {
      navigate("/login");
    }
  }, [isSign, error, navigate]);

  return (
    <div className={styles.signInMainBlock}>
      <div className={styles.signInMain}>
        <div className={styles.signInBlock}>
          <h1>Создайте аккаунт</h1>
          <input
            onChange={changeName}
            value={name}
            type="text"
            placeholder="Введите ваше имя"
          />
          <input
            onChange={changeLogin}
            value={login}
            type="text"
            placeholder="Введите логин"
          />
          <input
            onChange={changePassword}
            value={password}
            type="password"
            placeholder="Введите пароль"
          />
          <button onClick={handleRegister}>Sign Up</button>
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

export default SignUp;
