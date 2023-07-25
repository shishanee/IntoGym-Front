import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import Cardd from "./Card";
import styles from "./Shop.module.scss";
import { fetchProductCategory } from "../../features/productCategorySlice";
import { Link } from "react-router-dom";


const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const productCategory = useSelector(
    (state) => state.productCategory.productCategory
  );
  console.log(productCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()), dispatch(fetchProductCategory());
  }, []);
  return (
    <div>
      <div className={styles.mainShop}>
        <div>
          <div>Showing 12/50</div>
          <div>Sort By</div>
        </div>

        <div className={styles.blockForCard}>
          {products.map((item) => {
            return (
              <div className={styles.photoBl}>
                <Cardd
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={`${item.price} RUB`}
                />
              </div>
            );
          })}
        </div>

        <div>Search HERE</div>
        <div className={styles.categories}>
          Категории:
          {productCategory.map((item) => {
            return (
              <Link className={styles.linkk} to={item._id}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
