import React from "react";
import styles from "./Shop.module.scss";
import Products from "./Products";
import Categories from "./Categories";

const Shop = () => {
  return (
    <div className={styles.mainShop}>
        <Products />
        <Categories />
    </div>
  );
};

export default Shop;
