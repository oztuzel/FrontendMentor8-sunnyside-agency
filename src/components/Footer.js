import React from 'react';
import images from '../images/images';
import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.footer}>
      <h1 className={style.h1}> sunnyside </h1>
      <div className={style.nav} >
        <p >
          About
        </p>
        <p >
          Services
        </p>
        <p >
          Projects
        </p>
      </div>
      <div className={style.icons}>
        <img src={images.iconFacebook} alt='face' className={style.icon} />
        <img src={images.iconInstagram} alt='insta' className={style.icon} />
        <img src={images.iconTwitter} alt='twitter' className={style.icon} />
        <img src={images.iconPinterest} alt='pinterest' className={style.icon} />
      </div>
    </div>
  )
}

export default Footer