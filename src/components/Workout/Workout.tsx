import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { useEffect, useState } from "react";
import { fetchArticle, fetchOneArticle } from '../../features/wortkoutSlice';
import Article from './Article';
import styles from "./Workout.module.scss"
import { Link } from 'react-router-dom';


function Workout() {
    
    const article = useSelector((state) => state.workout.article)
    
   
    
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchArticle())
    }, [])
    
  return (
    <div className={styles.articleMap}>{article.map((item) => {
        return ( 
          <Link to={`/${item._id}`} onClick={() => handleClick(item._id)}>
            <Article key={item._id} image={item.image} title={item.info.split(" ").splice(0, 5).join(' ') + "..."} info={item.title}/>
          </Link>
        )
    })}</div>
  )
}

export default Workout