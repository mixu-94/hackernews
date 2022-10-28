import React, {useRef} from 'react'
import './Main.css'

const SearchFeature = ({searchdata, setSearchdata}) => {

  let inputfield = ""
  const inputfieldref = useRef()
  

  function handleChange(e) {
    inputfield = e.target.value;
  }

  function handleSearch() {
    setSearchdata(`http://hn.algolia.com/api/v1/search?query=${inputfield}`)
    inputfieldref.current.value = "";
    
  }

  const handleKeypress = e => {
  if (e.keyCode === 13) {
    handleSearch();
  }
};


  return (
    <div id="search-div">
        <input ref={inputfieldref} onChange={handleChange} onKeyDown={handleKeypress} type="text" name="input" placeholder='search for articles . . .'></input>
        <button onClick={handleSearch}>Search</button>
        
    </div>
  )
}

export default SearchFeature