import styles from "./Workout.module.scss";

// function Article({ id, image, title, info}) {
//   return (
//   <>
//     <div className={styles.articleCard}>
//         <img src={image} alt="" />
//     <h3>{title}</h3>
//     <span>{info}</span>
//     </div>

//   </>
//   )
// }

// export default Article

import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchOneArticle } from "../../features/wortkoutSlice";

const { Meta } = Card;

const Article: React.FC = ({ id, image, info, title }) => {
  const dispatch = useDispatch();

  return (
    <Card
      className={styles.Card}
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
