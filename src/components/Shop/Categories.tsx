import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from "./Shop.module.scss";
import { fetchCategoryProduct, fetchProducts } from '../../features/productSlice';

const Categories = () => {
    const productCategory = useSelector((state) => state.productCategory.productCategory);
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const handleClick = (id) => { 
        dispatch(fetchCategoryProduct(id))
    }

    const handleClickAll = () => {
        dispatch(fetchProducts())
    }
  return (
    <div>
    <div>
        <input className={styles.input} placeholder='ИЩИ ТУТ'/>
    </div>
    <div className={styles.categories}>
      Категории:
      {productCategory.map((item) => {
        return (
          <Link onClick={() => handleClick(item._id)} key={item._id} className={styles.linkk}>
            {item.name}
          </Link>
        );
      })}
      <Link onClick={handleClickAll} className={styles.linkk}> Все </Link>
    </div>
  </div>
  )
}

export default Categories
