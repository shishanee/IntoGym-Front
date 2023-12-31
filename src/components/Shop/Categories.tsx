import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Categories.module.scss";
import {
  fetchCategoryProduct,
  fetchProducts,
} from "../../features/productSlice";
import { updateQuery } from "../../features/searchSlice";
import { AppDispatch } from "../../app/store";

const Categories: React.FC = () => {
  const productCategory = useSelector(
    (state) => state.productCategory.productCategory
  );

  const search = useSelector((state) => state.search.query);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (id) => {
    dispatch(fetchCategoryProduct(id));
    dispatch(updateQuery(""));
  };

  const handleClickAll = () => {
    dispatch(fetchProducts());
    dispatch(updateQuery(""));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateQuery(e.target.value));
  };

  const handleClickFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.secondBlock}>
      <form onSubmit={handleClickFilter} className={styles.blockForInput}>
        <input
          value={search}
          onChange={handleChange}
          className={styles.inputFilter}
          placeholder="Поиск"
        />
        <button onClick={handleClickFilter} className={styles.butFilter}>
          <img
            className={styles.imgFilter}
            src="https://i.ibb.co/1K7yD3f/free-icon-magnifier-2866321.png"
            alt="3"
          />
        </button>
      </form>

      <div className={styles.categories}>
        <h3 className={styles.categoriesText}>Категории: </h3>

        <Link to={"#"} onClick={handleClickAll} className={styles.linkk}>
          {" "}
          Все{" "}
        </Link>
        {productCategory.map((item) => {
          return (
            <Link
              to={"#"}
              onClick={() => handleClick(item._id)}
              key={item._id}
              className={styles.linkk}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
