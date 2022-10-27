import React from 'react'
import './Main.css'

const SearchFeature = ({searchdata, setSearchdata}) => {

  let inputfield = ""

  function handleChange(e) {
    inputfield = e.target.value;
  }

  function handleSearch() {
    setSearchdata(`http://hn.algolia.com/api/v1/search?query=${inputfield}`)
  }


  return (
    <div id="search-div">
        <input onChange={handleChange} type="text" name="input" placeholder='search for articles . . .'></input>
        <button onClick={handleSearch}>Search</button>
        
    </div>
  )
}

export default SearchFeature