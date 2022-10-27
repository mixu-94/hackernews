import React from 'react'
import './Main.css'
import Button from '@mui/material/Button';




  






const SearchFeature = () => {

  return (
    <div id="search-div">
        <input type="text" name="input" placeholder='search for articles . . .'></input>


       <Button variant="outlined" style={{border:"1px solid black"}}>Search</Button>

    </div>
  )
}

export default SearchFeature