import React from 'react'
import BurgerMenu from './BurgerMenu'
import Logo from './Logo'
import './header.css'

const Header = () => {
  return (
    <>
        <BurgerMenu />
    <div id="headerdiv">
        <Logo />
    </div>
    </>

  )
}

export default Header