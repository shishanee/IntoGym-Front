import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMinus,
  addPlus,
  cartPay,
  deleteCart,
  getCart,
} from "../../features/cartSlice";
import styles from "./Cart.module.scss";
import cartImg from "../../../public/shopping-cart (1).png";
import basket from "../../../public/shopping-cart (2).png";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const cart = useSelector((state) => state.cart.cart);
  const message = useSelector((state) => state.cart.message);
  const balance = useSelector((state) => state.user.user);

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
    dispatch(deleteCart(id));
  };

  const handlePay = (result) => {
    dispatch(cartPay(result));
  };

  return (
    <div className={styles.main}>
      {cart.length !== 0 ? (
        <div>
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
                    <button
                      onClick={() => handleDelete(item._id)}
                      className={styles.deleteCart}
                    >
                      Удалить из корзины
                    </button>
                  </div>
                );
              })}
            </div>
            <div className={styles.payBlock}>
              <h4>
                Итого: &nbsp;
                {cart.reduce(
                  (acc, item) => acc + item.price * item.amount,
                  0
                )}{" "}
                ₽
              </h4>
              <button
                disabled={
                  balance.balance <
                  cart.reduce((acc, item) => acc + item.price * item.amount, 0)
                }
                onClick={() =>
                  handlePay(
                    cart.reduce(
                      (acc, item) => acc + item.price * item.amount,
                      0
                    )
                  )
                }
              >
                Оплатить
              </button>
              {balance.balance <
                cart.reduce(
                  (acc, item) => acc + item.price * item.amount,
                  0
                ) && (
                <div>
                  <p>Недостаточно средств!</p>
                  <Link to={"/balance"}>Пополнить счёт</Link>
                </div>
              )}
              <p className={styles.errorMessage}>{message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.basket}>
          <h1>Ваша корзина пуста</h1>
          <img src={basket} alt="" />
          <Link to={"/shop"}>Перейти в магазин</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
