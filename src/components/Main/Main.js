
import React, {useEffect, useState} from 'react'
import SearchFeature from './SearchFeature'
import './Main.css'
import dataJSON from '../../constants/hackernews.json'
import FetchData from '../News/FetchData'




const Main = () => {

//test ob die Daten da sind
 console.table(dataJSON.hits);

function displayData(){

    return <div data={dataJSON.hits}></div>

}



   /* if(loading) {

        return <h1>insert spinner here ... </h1>
    }*/



  return (

    <div id="main">
     <h1 id="hackernews">Neues aus der IT-Welt</h1>
    <br></br>
    <SearchFeature />

    <br></br>
    <FetchData />
    </div>

  )
}

export default Main