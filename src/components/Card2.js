import React from 'react';
import style from './Card2.module.css';

function Card2({img}) {
  return (
    <img src={img} className={style.img} alt='images'/>
  )
}

export default Card2