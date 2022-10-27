import React from 'react'
import './Footer.css'
import {useEffect} from 'react';



const Footer = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div>
       <div className='footer'>
         DDM HackerNews

       </div>

       <div className='impressum'>
        
        Copyright ©

        <div>WDG007</div>
        
        <button onClick={() =>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}} className='arrow-button'>    
              Back<span className='arrow'></span>
        </button>

          

       </div>

       
      
    </div>
  )
}

export default Footer