import styles from "./Workout.module.scss";
import { Card } from "antd";
const { Meta } = Card;

interface ArticleProps {
  image: string;
  info: string;
  title: string;
}

const Article = ({ image, info, title }: ArticleProps) => {
  return (
    <Card
      className={styles.Card}
      hoverable
      style={{ height: 430, width: 240 }}
      cover={<img className={styles.image} alt="example" src={image} />}
    >
      <h3>{info}</h3>
      <Meta className={styles.metaArt} description={title} />
    </Card>
  );
};

export default Article;
