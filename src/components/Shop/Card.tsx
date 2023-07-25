import React from 'react';
import { Card } from 'antd';
import styles from "./Shop.module.scss"

const { Meta } = Card;

const Cardd: React.FC = ({id, image, name, price}) => (
  <Card
    className={styles.card}
    hoverable
    style={{ width: 240 }}
    cover={<img className={styles.photo} alt="example" src={image} />}
  >
    <div>
    <Meta className={styles.meta} title={price} description={name} />
    <button  className={styles.but}>В корзину</button>
    </div>
  </Card>
);

export default Cardd;