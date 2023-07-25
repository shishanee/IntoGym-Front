import { useState } from "react";
import styles from "./HomePage.module.scss";
import Schedule from "../Schedule/Schedule";
import Follow from "../Follow/Follow";

const HomePage = () => {
  const [kilogram, setKilogram] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [bmi, setBmi] = useState<string>("");

  const changeKilogram = (e) => {
    setKilogram(e.target.value);
  };

  const changeHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleClick = () => {
    setResult(Math.round(kilogram / (height * height)));
    if (result < 16 && result > 18.49) {
      setBmi("Выраженный дефицит массы тела");
    }
    if (result > 16 && result < 18.49) {
      setBmi("Недостаточная (дефицит) масса тела");
    }
    if (result > 18.5 && result < 24.99) {
      setBmi("Норма");
    }
    if (result > 25 && result < 29.99) {
      setBmi("Избыточная масса тела (предожирение)");
    }
    if (result > 30 && result < 34.99) {
      setBmi("Ожирение первой степени");
    }
    if (result > 35 && result < 39.99) {
      setBmi("Ожирение второй степени");
    }
    if (result > 40) {
      setBmi("	Ожирение третьей степени (морбидное)");
    }
  };

  return (
    <>
    <div>
      <div className={styles.body}>
        <div className={styles.centerBlock}>
          <h3>MAKE YOUR</h3>
          <p>BODY</p>
        </div>
      </div>
      <div className={styles.calculateBlock}>
        <div className={styles.calculate}>
          <p>CALCULATE BMI &nbsp;</p>
          <div className={styles.inputs}>
            <span>Вес:</span>
            <input
              onChange={changeKilogram}
              value={kilogram}
              type="number"
              placeholder="КГ"
              />
            <span>Рост:</span>
            <input
              onChange={changeHeight}
              value={height}
              type="number"
              placeholder="М"
              />
          </div>
          <button
            onClick={handleClick}
            disabled={height.length === 0 && kilogram.length === 0}
            >
            CALCULATE
          </button>
        </div>
        <span>{bmi}</span>
      </div>
      <Follow />
      <Schedule/>
    </div>
    </>
  );
};

export default HomePage;
