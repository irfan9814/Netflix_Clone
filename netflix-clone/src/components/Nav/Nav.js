import React, {useState, useEffect} from 'react';
import './Nav.css';
import NetFlixLogo from '../../images/NetFlixLogo.png';
import NetflixAvatar from '../../images/NetflixAvatar.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [show, setShow] =useState(false);

    const NavBarVisibility = () => {
        if(window.scrollY > 100){
            setShow(true);
        } else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", NavBarVisibility);

        return () => {
            window.removeEventListener("scroll", NavBarVisibility)
        }
    },[]);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <Link to='/'>
            <img src={NetFlixLogo} className='nav-logo' alt='logo' />
        </Link>
        <img src={NetflixAvatar} className='nav-avatar' alt='logo' />
      
    </div>
  )
}

export default Nav
