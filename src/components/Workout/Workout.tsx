import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchArticle } from "../../features/wortkoutSlice";
import Article from "./Article";
import styles from "./Workout.module.scss";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";

function Workout() {
  const article = useSelector((state: RootState) => state.workout.article);

  const handleClick = (id: string) => {
    console.log(id);
  };

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchArticle());
  }, []);


  return (
    <div className={styles.articleMap}>
      {article.map((item) => {
        return (
          <Link to={`/${item._id}`} onClick={() => handleClick(item._id)}>
            <Article
              key={item._id}
              image={item.image}
              title={item.info.split(" ").splice(0, 5).join(" ") + "..."}
              info={item.title}
            />
          </Link>
        );
      })}
    </div>
  );
}


export default Workout;
