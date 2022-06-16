import React from 'react';
import style from './Client.module.css';


function Client({img, p, name, job}) {
  return (
    <div className={style.client}>
      <img src={img} alt={name} className={style.img} />
      <p className={style.p}> {p} </p>
      <h2 className={style.name}> {name} </h2>
      <p className={style.job}> {job} </p>
    </div>
  )
}

export default Client;