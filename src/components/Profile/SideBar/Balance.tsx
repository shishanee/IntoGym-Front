import SideBar from "./SideBar";
import styles from "../Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Result } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addMoney } from "../../../features/userSlice";

const Balance = () => {
  const [balance, setBalance] = useState("");
  const [pay, setPay] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value !== "-") setBalance(e.target.value);
  };

  const handleClick = () => {
    dispatch(addMoney({ balance }));
    setPay(true);
  };
  return (
    <div className={styles.mainBlock}>
      <SideBar />
      <div>
        {!pay ? (
          <div className={styles.pay}>
            {" "}
            <p>Ваш баланс: {user.balance} </p>
            <input value={balance} onChange={handleChange} type="number" />
            <button onClick={handleClick}>Пополнить баланс</button>{" "}
          </div>
        ) : (
          <Result
            status="success"
            title="Вы успешно пополнили баланс!"
            subTitle="Оплата поступит в течении 1-5 минут!"
            extra={[
              <Link to={"/shop"} key="buy">
                Перейти к покупкам
              </Link>,
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Balance;
