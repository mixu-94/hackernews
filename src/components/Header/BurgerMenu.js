import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import Navbar from '../Navbar/Navbar';
import './header.css'
import '../Navbar/navbar.css'

const BurgerMenu = () => {



let navbar = <h1>test</h1>

  return (
    <>

    <div id="burgerMenu"  >
      <Hamburger
      direction="top"
      rounded
      size="30"
      color="orange"
      onToggle={toggled => {
        if (toggled) {
           // open a menu
           console.log('open menu')

        } else {
           // close a menu
           console.log('close menu')
        }
      }}
       />    
       


    </div>
    

    </>

  )
}

export default BurgerMenu