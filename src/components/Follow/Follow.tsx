import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollow } from "../../features/followSlice";
import checked from "../../../public/check (1).png";
import crossed from "../../../public/close.png";
import styles from "./Follow.module.scss";
import { useState } from "react";
import ModalPop from "./ModalPop";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../app/store";

const Follow: React.FC = () => {
  const token = useSelector((state) => state.application.token);
  const [open, setOpen] = useState<boolean>(false);
  const [followId, setFollowId] = useState<string>("");
  const follow = useSelector((state) => state.follow.follow);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFollow());
  }, []);

  const handleClick = (id:string) => {
    setFollowId(id);
    setOpen(true);
  };

  return (
    <div className={styles.followMain}>
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
              {token && (
                <button onClick={() => handleClick(item._id)}>
                  Купить абонемент
                </button>
              )}
              {open && <ModalPop id={followId} setOpen={setOpen} />}
            </div>
          );
        })}
      </div>
      {!token && (
        <Link className={styles.registerLink} to={"/register"}>
          Зарегистрируйтесь чтобы приобрести абонемент
        </Link>
      )}
    </div>
  );
};

export default Follow;
