import React, {useState} from 'react';
import images from '../images/images';
import style from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);


  const openMenuHandler = () => {
    setIsOpenMenu((currentState)=> { return !currentState});
  }

  return (
    <div className={style.navbar}>
      <img src={images.logo} alt='logo' className={style.image}/>
      <div className={!isOpenMenu ? `${style.buttonDiv}` : `${style.buttonDivActive}`} >
        <p className={style.button} > About  </p>
        <p className={style.button} > Services  </p>
        <p className={style.button} >  Projects </p>
        <p className={style.buttonContact} > CONTACT  </p>
      </div>
      <FontAwesomeIcon icon={faBars} className={style.icon} onClick={openMenuHandler}/>
    </div>
  )
}

export default Navbar