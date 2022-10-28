import React, {useState, useEffect} from 'react'
import './Main.css'
import Button from '@mui/material/Button';




const SearchFeature = () => {

    const[searchInput,setSearchInput] = useState("")

    function handleChange(e){

        console.log(e.target.value)
        setSearchInput(e.target.value);
        console.log(searchInput);
    }

    function search(){
        setSearchInput(searchInput);

    }

    
    



  return (
    <div id="search-div">
        <input onChange={handleChange} type="text" name="input" placeholder='search for articles . . .'></input>


       <Button onCLick={search} variant="outlined" style={{border:"1px solid black"}}>Search</Button>

    </div>
  )
}

export default SearchFeature