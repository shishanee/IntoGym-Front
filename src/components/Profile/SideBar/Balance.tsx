import SideBar from "./SideBar";
import styled from "../Profile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Result } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addMoney } from "../../../features/userSlice";
import styles from "./Payment.module.scss";

const Balance: React.FC = () => {
  const [balance, setBalance] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [pay, setPay] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.value !== "-") setBalance(e.target.value);
  };

  const cardChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleClick = () => {
    dispatch(addMoney({ balance }));
    setPay(true);
  };
  return (
    <div className={styled.mainBlock}>
      <SideBar />
      <div>
        {!pay ? (
          <>
            <p className={styled.yourMoney}>Ваш баланс: {user.balance} </p>
            <div className={styles.modal}>
              <form className={styles.form}>
                <div className={styles.separator}></div>
                <div className={styles.credit_card_info__form}>
                  <div className={styles.input_container}>
                    <label className={styles.input_label}>
                      Card holder full name
                    </label>
                    <input
                      id="password_field"
                      className={styles.input_field}
                      type="text"
                      name="input-name"
                      title="Inpit title"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className={styles.input_container}>
                    <label className={styles.input_label}>
                      Card Number
                    </label>
                    <input
                      value={cardNumber}
                      onChange={cardChange}
                      id="password_field"
                      className={styles.input_field}
                      type="number"
                      name="input-name"
                      title="Inpit title"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className={styles.input_container}>
                    <label className={styles.input_label}>Enter amount</label>
                    <div className={styles.split}>
                      <input
                        id="password_field"
                        className={styles.balanceInput}
                        type="text"
                        name="input-name"
                        title="Expiry Date"
                        placeholder=""
                        value={balance}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  disabled={balance.length === 0 || cardNumber.length < 16}
                  onClick={handleClick}
                  className={styles.purchase__btn}
                >
                  Pay
                </button>
              </form>
            </div>
          </>
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
