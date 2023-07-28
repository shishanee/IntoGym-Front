import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMinus, addPlus, deleteCart, getCart } from "../../features/cartSlice";
import styles from "./Cart.module.scss";
import cartImg from "../../../public/shopping-cart (1).png";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  console.log(cart)
  const dispatch = useDispatch();

  const handlePlus = (id) => {
    dispatch(addPlus(id));
  };
  const handleMinus = (id) => {
    dispatch(addMinus(id));
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteCart(id))
  }

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
                  <button onClick={() => handleMinus(item._id)}>-</button>
                  <p>{item.amount}</p>
                  <button onClick={() => handlePlus(item._id)}>+</button>
                </div>
                <button onClick={() => handleDelete(item._id)} className={styles.deleteCart}>
                  Удалить из корзины
                </button>
              </div>
            );
          })}
        </div>
        <div className={styles.payBlock}>
          <p>
            Итого: &nbsp;
            {cart.reduce((acc, item) => acc + item.price, 0)} ₽
          </p>
          <button>Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
