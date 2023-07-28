import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, getCart, increment } from "../../features/cartSlice";
import styles from "./Cart.module.scss";
import { useState } from "react";
import cartImg from "../../../public/shopping-cart (1).png";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [result, setResult] = useState("");
  const [amounts, setAmounts] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    setResult(cart.reduce((acc, item) => acc + item.product.price, 0));
    setAmounts(cart.reduce((acc, item) => acc + item.amount, 0));
  };

  const handleDec = (id) => {
    dispatch(decrement(id));
  };

  const handleInc = (id) => {
    dispatch(increment(id));
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className={styles.main}>
      <h1>
        CART &nbsp; <img src={cartImg} alt="" />
      </h1>
      <div className={styles.mainBlock}>
        <div className={styles.cartBlock}>
          {cart.map((item, index) => {
            return (
              <div className={styles.oneCard}>
                <p>{index + 1}.</p>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price} ₽</p>
                <div className={styles.col}>
                  <p>Количество:</p>
                  <button onClick={() => handleDec(item._id)}>-</button>
                  <p>{item.amount}</p>
                  <button onClick={() => handleInc(item._id)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.payBlock}>
          <p>
            Итого: &nbsp;
            {cart.reduce((acc, item) => acc + item.price, 0)} ₽
          </p>
          <button onClick={handleClick}>Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
