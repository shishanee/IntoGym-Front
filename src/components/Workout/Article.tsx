import styles from "./Workout.module.scss";
import React from "react";
import { Card } from "antd";
import { useDispatch } from "react-redux";

const { Meta } = Card;

const Article: React.FC = ({ id, image, info, title }) => {
  const dispatch = useDispatch();

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
