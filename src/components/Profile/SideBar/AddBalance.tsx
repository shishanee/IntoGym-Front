import styles from "./Payment.module.scss";

const AddBalance = () => {
  return (
    <div className={styles.modal}>
      <form className={styles.form}>
        <div className={styles.separator}>
        </div>
        <div className={styles.credit_card_info__form}>
          <div className={styles.input_container}>
            <label for="password_field" className={styles.input_label}>
              Card holder full name
            </label>
            <input
              id="password_field"
              className={styles.input_field}
              type="text"
              name="input-name"
              title="Inpit title"
              placeholder="Enter your full name"
            />
          </div>
          <div className={styles.input_container}>
            <label for="password_field" className={styles.input_label}>
              Card Number
            </label>
            <input
              id="password_field"
              className={styles.input_field}
              type="number"
              name="input-name"
              title="Inpit title"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className={styles.input_container}>
            <label for="password_field" className={styles.input_label}>
              Expiry Date / CVV
            </label>
            <div className={styles.split}>
              <input
                id="password_field"
                className={styles.input_field}
                type="text"
                name="input-name"
                title="Expiry Date"
                placeholder="01/23"
              />
              <input
                id="password_field"
                className={styles.input_field}
                type="number"
                name="cvv"
                title="CVV"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
        <button className={styles.purchase__btn}>Checkout</button>
      </form>
    </div>
  );
};

export default AddBalance;
