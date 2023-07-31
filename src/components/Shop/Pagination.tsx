import React from "react";
import styles from "./Shop.module.scss";
import { Link } from "react-router-dom";

interface PaginationProps {
  productsPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  productsPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((number) => {
        return (
          <Link
            key={number}
            to={"/shop"}
            className={number === currentPage ? styles.linA : styles.lin}
            onClick={() => paginate(number)}
          >
            {number}
          </Link>
        );
      })}
    </>
  );
};

export default Pagination;
