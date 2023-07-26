import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Shop.module.scss";
import { Link } from "react-router-dom";
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
