import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../features/cartSlice";
import styles from "./Cart.module.scss";
import { useState } from "react";
import cartImg from '../../../public/shopping-cart (1).png'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [num, setNum] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className={styles.main}>
      <h1>CART &nbsp; <img src={cartImg} alt="" /></h1>
      <div className={styles.mainBlock}>
        <div className={styles.cartBlock}>
          {cart.map((item, index) => {
            return (
              <div className={styles.oneCard}>
                <p>{index + 1}.</p>
                <img src={item.product.image} alt="" />
                <p>{item.product.name}</p>
                <p>{item.product.price} ₽</p>
                <div className={styles.col}>
                  <p>Количество:</p>
                  <button>-</button>
                  <p> {item.amount}</p>
                  <button>+</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.payBlock}>
          <p>
            Итого: &nbsp;
            {cart.reduce((acc, item) => acc + item.product.price, 0)} ₽
          </p>
          <button>Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;