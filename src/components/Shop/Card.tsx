import React from "react";
import { Card } from "antd";
import styles from "./Shop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../features/cartSlice";
import { AppDispatch } from "../../app/store";

const { Meta } = Card;

interface CardProps {
  id: number;
  image: string;
  name: string;
  price: string;
  ratingAdd: (id: number) => void;
}

const Cardd: React.FC<CardProps> = ({ id, image, name, price, ratingAdd }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state) => state.cart.cart);

  const handleClick = (id: number) => {
    ratingAdd(id);
    dispatch(addCart(id));
  };

  const filtred = cart.find((item) => item._id === id);

  return (
    <Card
      className={styles.card}
      hoverable
      style={{ width: 240 }}
      cover={<img className={styles.photo} alt="example" src={image} />}
    >
      <div>
        <Meta className={styles.meta} title={price} description={name} />
        <button disabled={filtred} onClick={() => handleClick(id)} className={styles.but}>
          {filtred ? "Уже в корзине" : "Добавить в корзину"}
        </button>
      </div>
    </Card>
  );
};

export default Cardd;
