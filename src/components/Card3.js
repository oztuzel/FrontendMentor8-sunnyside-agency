import React from 'react';
import style from './Card3.module.css';

function Card3({img, title, parag, clas}) {
  const stylesTitle = `${style.title} ${style[clas]}`;
  const stylesParag = `${style.p} ${style[clas]}`;
  
  return (
    <div className={style.div}>
      <img src={img} alt={parag} className={style.img} />
      <h1 className={stylesTitle}> {title} </h1>
      <p className={stylesParag}> {parag} </p>
    </div>
  )
}

export default Card3