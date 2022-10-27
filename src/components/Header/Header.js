import React from 'react'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import './header.css'

const Header = () => {
  return (
    <>
    <div id="headerdiv">
        <Logo />
        <BurgerMenu />


    </div>
    </>

  )
}

export default Header