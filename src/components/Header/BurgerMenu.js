import React, {useState} from 'react';
import Hamburger from 'hamburger-react';
import './header.css'


const BurgerMenu = () => {



  return (
    <div id="burgerMenu"  >
      <Hamburger
      direction="top"
      size="30"
      color="orange"
      onToggle={toggle =>{
        if(toggle){
          console.log('open menu');
          
          
        }
        else{
          console.log('closed menu');
        }
      }}
       />
    </div>
  )
}

export default BurgerMenu