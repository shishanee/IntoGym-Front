import { useDispatch, useSelector } from "react-redux";
import styles from "./Follow.module.scss";
import { addFollow } from "../../features/followSlice";
import { Link } from "react-router-dom";

const ModalPop: React.FC = ({ setOpen, id }) => {
  const message = useSelector((state) => state.follow.message);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addFollow(id));
  };

  const goBack = () => {
    setOpen(false);
  };

  return (
    <div className={styles.modal}>
      {!message ? (
        <div className={styles.modal__content}>
          <h4>Вы уверены что хотите купить абонемент?</h4>
          <div>
            <button onClick={handleClick}>Да</button>
            <button onClick={() => setOpen(false)}>Нет</button>
          </div>
        </div>
      ) : (
        <div className={styles.modal__content}>
          {message === "У вас уже есть абонемент" && (
            <div>
              <h1>{message}</h1>
              <button onClick={goBack}>Вернуться назад</button>
            </div>
          )}
          {message === "Недостаточно средств" && (
            <div>
              <h1>{message}</h1>
              <Link to={"/balance"}>Пополнить баланс</Link>
            </div>
          )}
          {message === "Вы успешно купили абонемент!" && (
            <div>
              <h1 className={styles.trueMessage}>{message}</h1>
              <button onClick={goBack}>Вернуться назад</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ModalPop;
