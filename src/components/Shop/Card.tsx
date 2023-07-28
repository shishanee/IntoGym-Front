import React, { useState } from 'react';
import { Card } from 'antd';
import styles from "./Shop.module.scss"
import { useDispatch } from 'react-redux';
import { addCart } from '../../features/cartSlice';

const { Meta } = Card;

const Cardd: React.FC = ({id, image, name, price, ratingAdd }) => {

  const dispatch = useDispatch()
  
  const handleClick =(id) => {
    ratingAdd(id)
    dispatch(addCart(id))
  }
  
  return(
  <Card
    className={styles.card}
    hoverable
    style={{ width: 240 }}
    cover={<img className={styles.photo} alt="example" src={image} />}
  >
    <div>
    <Meta className={styles.meta} title={price} description={name} />
    <button  onClick={() => handleClick(id)} className={styles.but}>В корзину</button>
    </div>
  </Card>
   )
  }
;


export default Cardd;
