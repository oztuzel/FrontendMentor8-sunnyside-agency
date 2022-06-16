import React from 'react';
import style from './Card1.module.css';

function Card1({title, parag, p}) {
  return (
    <div className={style.card}>
      <h1 className={style.title}> {title} </h1>
      <p className={style.parag}>{parag}</p>
      <h4 className={style.p}>{p}</h4>
    </div>
  )
}

export default Card1