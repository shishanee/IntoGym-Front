import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Shop.module.scss";
import MenuOp from "./MenuOp";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import { fetchProductCategory } from "../../features/productCategorySlice";
import Pagination from "./Pagination";
import Cardd from "./Card";

const Products = () => {
  const products = useSelector((state) => state.products.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [maxItems] = useState(12);

  const lastIndex = currentPage * maxItems;
  const firstIndex = lastIndex - maxItems;

  const currentProducts = products.slice(firstIndex, lastIndex);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts()), dispatch(fetchProductCategory());
  }, []);

  return (
    <div className={styles.products}>
      <div className={styles.sortBy}>
        <div>
        Показано: {firstIndex + 1}/
          {lastIndex > products.length ? products.length : lastIndex}
        </div>
        <div className={styles.menuOp}>
          <MenuOp />
        </div>
      </div>

      <div className={styles.blockForCard}>
        {currentProducts.map((item) => {
          return (
            <div key={item._id} className={styles.photoBl}>
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
      <div className={styles.pagination}>
        <Link
          to={"/shop"}
          className={currentPage === 1 ? styles.disabled : styles.lin}
          onClick={prevPage}
        >
          ←
        </Link>
        <Pagination
          productsPage={maxItems}
          totalProducts={products.length}
          paginate={paginate}
        />
        <Link
        to={"/shop"}
          className={
            lastIndex >= products.length ? styles.disabled : styles.lin
          }
          onClick={nextPage}
        >
          →
        </Link>
      </div>
    </div>
  );
};

export default Products;
