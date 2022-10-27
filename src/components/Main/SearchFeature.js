import React from 'react'
import './Main.css'

const SearchFeature = () => {
  return (
    <div id="search-div">
        <input type="text" name="input" placeholder='search for articles . . .'></input>
        <button>Search</button>  
    </div>
  )
}

export default SearchFeature