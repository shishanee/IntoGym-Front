import { useState } from "react";
import styles from "./HomePage.module.scss";
import Follow from "../Follow/Follow";

const HomePage = () => {
  const [kilogram, setKilogram] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");
  const [bmi, setBmi] = useState("");

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
        <Follow/>
    </div>
  );
};

export default HomePage;
