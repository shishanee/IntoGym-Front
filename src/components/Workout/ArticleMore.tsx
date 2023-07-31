import { useDispatch, useSelector } from "react-redux";
import { fetchArticle } from "../../features/wortkoutSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Workout.module.scss";
import { AppDispatch, RootState } from "../../app/store";

function ArticleMore() {
  const articles = useSelector((state: RootState) => state.workout.article);

  const dispatch = useDispatch<AppDispatch>();
  
  const { id } = useParams();
  
  const filteredArticles = articles.filter((i) => i._id === id);

  useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  return (
    <div>
      {filteredArticles.map((item) => {
        return (
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.card__image_container}></div>

              <div className={styles.card__content}>
                <div className={styles.title_block}>
                  {" "}
                  <p
                    style={{ backgroundImage: `url(${item.image})` }}
                    className={styles.card__title}
                  >
                    {item.title}
                  </p>
                </div>
                <p className={styles.p}>{item.info}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticleMore;
