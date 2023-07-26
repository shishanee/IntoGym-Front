import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollow } from "../../features/followSlice";
import checked from "../../../public/check (1).png";
import crossed from "../../../public/close.png";
import styles from "./Follow.module.scss";

const Follow = () => {
  const follow = useSelector((state) => state.follow.follow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollow());
  }, []);

  return (
    <div className={styles.follow}>
      {follow.map((item) => {
        return (
          <div key={item._id} className={styles.block}>
            <h1>{item.name}</h1>
            <div className={styles.price}>
              <h2> ₽ {item.price} </h2>&nbsp;&nbsp;
              <p>в месяц</p>
            </div>
            <div>
              <div className={styles.followBlock}>
                Спортзал: &nbsp; &nbsp;
                {item.hall === true ? (
                  <img src={checked} alt="" />
                ) : (
                  <img src={crossed} />
                )}
              </div>
              <div className={styles.followBlock}>
                Бассейн: &nbsp; &nbsp; &nbsp;
                {item.pool === true ? (
                  <img src={checked} alt="" />
                ) : (
                  <img src={crossed} />
                )}
              </div>
              <div className={styles.followBlock}>
                Сауна: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 
                {item.sauna === true ? (
                  <img src={checked} alt="" />
                ) : (
                  <img src={crossed} />
                )}
              </div>
            </div>
            <button>Купить абонемент</button>
          </div>
        );
      })}
    </div>
  );
};

export default Follow;
