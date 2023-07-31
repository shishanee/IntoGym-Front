import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Shop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addRating, fetchProducts } from "../../features/productSlice";
import { fetchProductCategory } from "../../features/productCategorySlice";
import Pagination from "./Pagination";
import Cardd from "./Card";
import { updateQuery } from "../../features/searchSlice";
import { AppDispatch } from "../../app/store";

const Products: React.FC = () => {
  const products = useSelector((state) => state.products.products);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxItems] = useState<number>(12);

  const lastIndex = currentPage * maxItems;
  const firstIndex = lastIndex - maxItems;

  const dispatch = useDispatch<AppDispatch>();
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

  useEffect(() => {
    dispatch(fetchProducts()), dispatch(fetchProductCategory());
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("Сортировать");

  const handleOpenPopup = () => {
    setIsOpen(true);
    dispatch(updateQuery(""));
  };

  const handleClosePopup = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleSortOption = (option) => {
    setName(option);
    handleClosePopup();
    setCurrentPage(1);
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

  const popularProducts = products.slice().sort(sortByRating);
  const expensiveProducts = products.slice().sort(sortByExpensive);
  const poorProducts = products.slice().sort(sortByPoor);

  const search = useSelector((state) => state.search.query);

  const newArr = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((product, index) => ({ ...product, index }));

  const filteredProducts =
    (name === "Сортировать" && search === "") ||
    (name === "По умолчанию" && search === "")
      ? products.slice(firstIndex, lastIndex)
      : name === "По популярности" && search === ""
      ? popularProducts.slice(firstIndex, lastIndex)
      : name === "По возрастанию цены" && search === ""
      ? poorProducts.slice(firstIndex, lastIndex)
      : name === "По убыванию цены" && search === ""
      ? expensiveProducts.slice(firstIndex, lastIndex)
      : search !== ""
      ? newArr.slice(firstIndex, lastIndex)
      : [];

  return (
    <div className={styles.products}>
      <div className={styles.sortBy}>
        <div>
          Показано: {firstIndex + 1}/
          {lastIndex > filteredProducts.length && search === ""
            ? products.length
            : newArr.length}
        </div>

        <div onBlur={handleClosePopup} className={styles.blockForAll}>
          {!isOpen ? (
            <button className={styles.butOne} onClick={handleOpenPopup}>
              {name}

              <button className={styles.butDown}> ▼ </button>
            </button>
          ) : (
            <button className={styles.butOne} onClick={handleClosePopup}>
              {name}
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
        {filteredProducts.map((item) => {
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
          className={currentPage === 1 ? styles.disabled : styles.strel}
          onClick={prevPage}
        >
          ‹
        </Link>
        <Pagination
          productsPage={maxItems}
          totalProducts={search === "" ? products.length : newArr.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <Link
          to={"/shop"}
          className={
            search === "" && lastIndex >= products.length
              ? styles.disabled
              : search !== "" && lastIndex >= newArr.length
              ? styles.disabled
              : styles.strel
          }
          onClick={nextPage}
        >
          ›
        </Link>
      </div>
    </div>
  );
};

export default Products;
