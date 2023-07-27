import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Shop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addRating, fetchProducts } from "../../features/productSlice";
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

  const ratingAdd = (id) => {
    dispatch(addRating(id));
  };

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

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setTimeout(() => {
      setIsOpen(false);
      setChecked(false);
    }, 150);
  };

  const handleSortOption = (option) => {
    setName(option);
    handleClosePopup();
    setChecked(true);
  };

  function sortByRating(a, b) {
    return b.rating - a.rating;
  }

  function sortByExpensive(a, b) {
    return b.price - a.price;
  }

  function sortByPoor(a, b) {
    return a.price - b.price;
  }

  const popularProducts = products.slice().sort(sortByRating).slice(firstIndex, lastIndex);
  const expensiveProducts = products.slice().sort(sortByExpensive).slice(firstIndex, lastIndex);
  const poorProducts = products.slice().sort(sortByPoor).slice(firstIndex, lastIndex);

  return (
    <div className={styles.products}>
      <div className={styles.sortBy}>


        <div>
          Показано: {firstIndex + 1}/
          {lastIndex > products.length ? products.length : lastIndex}
        </div>



        <div onBlur={handleClosePopup} className={styles.blockForAll}>
      {!isOpen ? (
        <button className={styles.butOne} onClick={handleOpenPopup}>
          <p>Сортировать</p>

          <button className={styles.butDown}> ▼ </button>
        </button>
      ) : (
        <button className={styles.butOne} onClick={handleClosePopup}>
          <p>Сортировать</p>
          <button className={styles.butDown}> ▲ </button>
        </button>
      )}
      {isOpen && (
        <div className={styles.blockForButs}>
          <button
            className={styles.butPop}
            onClick={() => handleSortOption("По популярности")}
          >
            По популярности
          </button>
          <button
            className={styles.butPop}
            onClick={() => handleSortOption("По возрастанию цены")}
          >
            По возрастанию цены
          </button>
          <button
            className={styles.butPop}
            onClick={() => handleSortOption("По убыванию цены")}
          >
            По убыванию цены
          </button>
          <button
            className={styles.butPop}
            onClick={() => handleSortOption("По умолчанию")}
          >
            По умолчанию
          </button>
        </div>
      )}
    </div>
          


      </div>

      <div className={styles.blockForCard}>
        {
        (
        name === "" || name === "По умолчанию" ? currentProducts : 
        name === "По популярности" ? popularProducts :
        name === "По возрастанию цены" ? poorProducts :
        name === "По убыванию цены" ? expensiveProducts : []
        )
        .map((item) => {
          return (
            <div key={item._id} className={styles.photoBl}>
              <Cardd
                id={item._id}
                image={item.image}
                name={item.name}
                price={`${item.price} RUB`}
                ratingAdd={ratingAdd}
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
