import React from "react";
import { Card } from "antd";
import styles from "./Categories.module.scss";

const { Meta } = Card;

const CardForCat: React.FC = ({ price, image }) => (
  <Card
    hoverable
    style={{ width: 140, height: 120 }}
    cover={<img className={styles.imgCat} alt="example" src={image} />}
  >
    <Meta title={price} />
  </Card>
);

export default CardForCat;
