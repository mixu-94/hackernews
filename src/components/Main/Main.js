import React from 'react'
import './Main.css'
import FetchData from '../News/FetchData'

const Main = () => {
  return (
    <div className='main'>
        
        <input className='main-searchbar' type="text" placeholder='Search...'></input>

        <p className='main-list'> Liste mit News</p>
        <FetchData/>
    </div>
  )
}

export default Main