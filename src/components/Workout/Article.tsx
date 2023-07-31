import styles from "./Workout.module.scss";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export interface InfoType {
  image: string;
  info: string;
  title: string;
}

const Article: React.FC = ({ image, info, title }: InfoType) => {
  return (
    <Card
      className={styles.card}
      hoverable
      style={{ width: 240 }}
      cover={<img className={styles.image} alt="example" src={image} />}
    >
      <h3>{info}</h3>
      <Meta className={styles.metaArt} description={title} />
    </Card>
  );
};

export default Article;
